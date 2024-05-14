import { Entity, Column, OneToOne, PrimaryGeneratedColumn, ManyToOne, OneToMany,JoinColumn } from 'typeorm';
import { Prefixs } from 'src/prefixs/entities/prefix.entity';
import { Gender } from 'src/genders/entities/gender.entity';
import { Studentmapping } from 'src/studentmapping/entities/studentmapping.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentID: string;

  @Column()
  prefixCode: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  genderCode: number;

  @Column()
  dateOfBirth: Date;

  @Column()
  createAt: Date;

  @Column()
  updateAt: Date;

  @OneToOne(() => Prefixs)
  @JoinColumn({ name: 'prefixCode' })
  prefix: Prefixs;

  @OneToOne(() => Gender)
  @JoinColumn({ name: 'genderCode' })
  gender: Gender;

//   @OneToOne(() => Studentmapping)
//   @JoinColumn({ name: 'id' })
//   mapping: Studentmapping;
}
