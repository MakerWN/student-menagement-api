import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Classroom } from 'src/classroom/entities/classroom.entity';

@Entity()
export class Studentmapping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  classRoomID: number;

  @Column()
  studentID: number;
}
