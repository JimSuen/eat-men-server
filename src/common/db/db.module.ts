import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { requireClassesSync } from '../loader';
import { DbService } from './db.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: async () => {
        return {
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          database: 'eat-men',
          username: 'root',
          password: 'root',
          entities: requireClassesSync(__dirname, '../entity'),
          migrations: [],
          subscribers: [],
          // migrations: requireClassesSync(__dirname, '../migration'),
          // subscribers: requireClassesSync(__dirname, '../subscriber'),
        };
      },
    }),
    TypeOrmModule.forFeature(requireClassesSync(__dirname, '../entity')),
  ],
  providers: [DbService],
  exports: [DbService, TypeOrmModule],
})
export class DbModule {}
