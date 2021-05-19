import { Module } from '@nestjs/common';
import { ConfigModule } from './common/config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, ConfigModule],
})
export class AppModule {}
