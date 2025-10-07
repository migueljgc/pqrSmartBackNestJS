import {
  Body,
  Controller,
  Get,
  Module,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  getAuth(@Body() loginDto: LoginDto) {
    return this.authService.getAuth(loginDto);
  }

  @Post('register')
  createAuth(@Body() registerDto: RegisterDto) {
    return this.authService.createAuth(registerDto);
  }
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log(req.user);
    const userEmail = req.user.email;
    return this.authService.getProfile(userEmail);
  }
}
