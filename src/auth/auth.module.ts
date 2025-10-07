import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant/jwt.constants';
import { AuthController } from './auth.controller';
import { RolesGuard } from './guard/roles.guard';
import { AuthGuard } from './guard/auth.guard';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthGuard, RolesGuard],
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  exports: [AuthGuard, RolesGuard, JwtModule],
})
export class AuthModule {}
