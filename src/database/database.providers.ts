import { join } from 'path';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '2004',
        database: 'pqrsmart',
        entities: [join(__dirname, '..', '**', '*.entity.{js,ts}')],
        synchronize: true,
        //logging: true,
      });

      return dataSource.initialize();
    },
  },
];
