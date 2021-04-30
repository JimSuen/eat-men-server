import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import { User } from './entity/User';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  createConnection()
    .then(async (connection: Connection) => {
      const user = new User();
      user.username = 'sun-yan';
      user.password = '111';
      user.createAt = new Date();
      user.updateAt = new Date();
      user.isAvailable = true;
      const userRepository = connection.getRepository(User);
      await userRepository.save(user);
      await connection.manager.save(user);
      console.log('User has been saved');
    })
    .catch((error) => console.log(error));
}
bootstrap();
