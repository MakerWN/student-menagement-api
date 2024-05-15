import { Entity, Column, OneToOne, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn } from 'typeorm';
import { Prefixs } from 'src/prefixs/entities/prefix.entity';
import { Gender } from 'src/genders/entities/gender.entity';
import { Studentmapping } from 'src/studentmapping/entities/studentmapping.entity';
import { Classroom } from 'src/classroom/entities/classroom.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentNo: string;

  @Column()
  prefixCode: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  genderCode: number;

  @Column({ default: null })
  classCode: number;

  @Column()
  dateOfBirth: Date;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updateAt: Date;

  @ManyToOne(() => Prefixs)
  @JoinColumn({ name: 'prefixCode' })
  prefix: Prefixs;

  @ManyToOne(() => Gender)
  @JoinColumn({ name: 'genderCode' })
  gender: Gender;

  @ManyToOne(() => Classroom)
  @JoinColumn({ name: 'classCode' })
  classRoom: Classroom;
}
