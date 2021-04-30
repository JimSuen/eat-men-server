import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import { User } from './entity/user';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'eat-men',
    synchronize: true,
    logging: false,
    entities: [User],
  })
    .then(async (connection: Connection) => {
      const user = new User();
      user.username = 'jim-suen-1';
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
