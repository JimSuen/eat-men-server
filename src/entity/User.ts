import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 60,
  })
  username: string;

  @Column({
    length: 30,
  })
  password: string;

  @Column()
  createAt: Date;

  @Column()
  updateAt: Date;

  @Column()
  isAvailable: boolean;
}
