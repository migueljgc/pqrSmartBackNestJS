// users.providers.ts
import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';

export const usersProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'], // 👈 Inyecta el DataSource del DatabaseModule
  },
];
