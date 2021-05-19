import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class DbService {
  constructor(
    @InjectConnection() public readonly connection: Connection,
    @InjectRepository(User) public readonly users: Repository<User>,
  ) {}
}
