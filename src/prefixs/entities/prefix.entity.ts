import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Prefixs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}