import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Role } from './enums/role.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async getAuth(loginDto: LoginDto) {
    const user = await this.userService.findOneByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException('Email or password incorrect');
    }
    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Email or password incorrect');
    }
    const payload = { email: user.email, roles: user.role, sub: user.id };
    const token = await this.jwtService.signAsync(payload);
    return { token };
  }
  async createAuth(registerDto: RegisterDto) {
    console.log('Registering auth:', registerDto);

    // Map RegisterDto to CreateUserDto
    const createUserDto = {
      email: registerDto.email,
      password: await bcrypt.hash(registerDto.password, 10),
      name: registerDto.fullName ?? '', // Provide default or get from registerDto
      number: registerDto.number, // Provide default or get from registerDto
      role: Role.Admin, // Default role if not provided
    };
    console.log('Mapped CreateUserDto:', createUserDto);
    const user = await this.userService.findOneByEmail(registerDto.email);
    if (user) {
      throw new BadRequestException('User with this email already exists');
    }
    return await this.userService.create(createUserDto);
  }
  async getProfile(email: string) {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const { password, ...profile } = user; // Exclude password from the profile
    return profile;
  }
}
