import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>, // 👈 Ahora se inyecta correctamente
  ) {}

  create(createUerDto: CreateUserDto) {
    return this.userRepository.save(createUerDto);
  }
  findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }
  getUser(email: string, password: string) {
    return this.userRepository.findOneBy({ email, password });
  }
}
