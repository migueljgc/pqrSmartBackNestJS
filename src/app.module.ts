import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/guard/roles.guard';
import { PqrsTypeModule } from './pqrs-type/pqrs-type.module';
import { PqrsModule } from './pqrs/pqrs.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, PqrsTypeModule, PqrsModule],

  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
