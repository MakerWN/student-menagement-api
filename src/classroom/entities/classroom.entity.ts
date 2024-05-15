import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Classroom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  classNo: string;

  @Column()
  className: string;

  @Column()
  year: string;

  @Column()
  grade: string;

  @Column()
  teacher: string;

  @Column()
  createAt: Date;

  @Column()
  updateAt: Date;
}
