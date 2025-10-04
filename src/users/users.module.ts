import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './provider/users.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule], // 👈 Importamos DatabaseModule
  controllers: [UsersController],
  providers: [
    UsersService,
    ...usersProviders, // 👈 Añadimos el repositorio
  ],
  exports: [UsersService],
})
export class UsersModule {}
