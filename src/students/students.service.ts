import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>
  ) { }

  create(createStudentDto: CreateStudentDto) {
    return this.studentsRepository.save(createStudentDto);
  }

  findAll(): Promise<Student[]> {
    return this.studentsRepository.find({ relations: ['prefix', 'gender'] });
  }

  async getStudentWithFilter(query) {
    const search = query.search;
    const filter = query.filter;
    let students = await this.findAll();
    students = students.filter((student) => ((student.studentID === search || student.firstName === search || student.lastName === search) && (student === filter)));
    return students;
  }

  findOne(id: number): Promise<Student | null> {
    return this.studentsRepository.findOneBy({ id });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.studentsRepository.update(id, updateStudentDto);
  }

  async remove(id: number): Promise<void> {
    await this.studentsRepository.delete(id);
  }
}
