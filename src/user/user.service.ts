import { Inject, Injectable } from '@nestjs/common';
import { DbService } from 'src/common/db/db.service';
import { User } from 'src/entity/user';

@Injectable()
export class UserService {
  constructor(@Inject(DbService) private readonly dbService: DbService) {}

  getHello(): string {
    return 'User Hello World!';
  }

  /**
   * register a new user
   *
   * @param username string
   * @param password string
   * @returns token
   */
  public async register(username: string, password: string): Promise<string> {
    if (await this.dbService.users.findOne(username)) {
    }
    const user = new User();
    user.username = username;
    user.password = password;
    user.createAt = new Date();
    user.updateAt = new Date();
    user.isAvailable = true;
    await this.dbService.users.save(user);
    return 'ssss';
  }
}
