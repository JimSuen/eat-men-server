import { Module } from '@nestjs/common';
import { DbService } from 'src/common/db/db.service';
import { Connection } from 'typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, DbService, Connection],
})
export class UserModule {}
