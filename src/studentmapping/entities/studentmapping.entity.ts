import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Classroom } from 'src/classroom/entities/classroom.entity';

@Entity()
export class Studentmapping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  classRoomCode: number;

  @Column()
  studentCode: number;

  @OneToOne(() => Classroom)
  @JoinColumn({ name: 'classRoomCode' })
  classRoom: Classroom;
}
