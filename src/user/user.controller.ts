import { Body, Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getHello(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<string> {
    const token = await this.userService.register(username, password);
    return token;
  }
}
