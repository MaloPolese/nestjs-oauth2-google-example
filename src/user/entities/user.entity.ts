import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  displayName: string;

  @Column()
  email: string;

  @Column()
  avatar: string;
}
