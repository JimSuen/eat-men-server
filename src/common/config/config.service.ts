import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string | number | boolean };

  constructor() {
    this.envConfig = {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'eat-men',
      synchronize: true,
      logging: false,
    };
  }

  public get(key) {
    return this.envConfig[key];
  }
}
