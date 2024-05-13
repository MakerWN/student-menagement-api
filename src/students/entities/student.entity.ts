import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  citizenID: string;

  @Column()
  prefix: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  gender: number;

  @Column()
  dateOfBirth: Date;

  @Column()
  grade: number;

  @Column()
  class: number;

  @Column()
  createAt: Date;

  @Column()
  updateAt: Date;
}
