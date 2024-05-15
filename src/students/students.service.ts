import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Repository, ILike } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
  ) { }

  create(createStudentDto: CreateStudentDto) {
    return this.studentsRepository.save(createStudentDto);
  }

  findAll(): Promise<Student[]> {
    return this.studentsRepository.find({ relations: ['prefix', 'gender', 'classRoom'] });
  }

  async getStudentWithSearch(search: string, filter: any): Promise<Student[]> {
    try {
      if (filter && filter.classCode) {
        return await this.studentsRepository.find({
          relations: ['prefix', 'gender', 'classRoom'],
          where: [
            { classCode: filter.classCode },
          ],
        });
      } else {
        return await this.studentsRepository.find({
          relations: ['prefix', 'gender', 'classRoom'],
          where: [
            { studentNo: ILike(`%${search || ''}%`) },
            { firstName: ILike(`%${search || ''}%`) },
            { lastName: ILike(`%${search || ''}%`) },
          ],
        });
      }
    } catch (e) {
      console.error(e, 'getStudentWithSearch');
    }
  }

  async getStudentWithfilterClassRoom(filter: object): Promise<Student[]> {
    try {
      const data = await this.studentsRepository.find({
        where: [{ classCode: filter['classNo'] }]
      })
      return data;
    } catch (e) {
      console.error(e, 'getStudentWithSearch');
    }
  }

  async getStudentWithFilter(query) {
    //   let students = await this.findAll();
    //   const search = query.search;
    //   const filter = query.filter;
    //   students = students.filter((student) => filter && student.classRoom ? (student.studentNo === search ||
    //     student.firstName === search ||
    //     student.lastName === search ||
    //     student.classRoom.classNo === filter.classNo ||
    //     student.classRoom.year === filter.year ||
    //     student.classRoom.grade === filter.grade) : student.studentNo === search ||
    //     student.firstName === search ||
    //   student.lastName === search
    //   );
    //   return students;
  }

  async getStudentWithFilterNot(): Promise<Student[]> {
    return this.studentsRepository.find({ where: { classCode: null } });
  }

  findOne(id: number): Promise<Student | null> {
    return this.studentsRepository.findOne({
      where: {
        id
      },
      relations: ['prefix', 'gender', 'classRoom']
    });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.studentsRepository.update(id, updateStudentDto);
  }

  async updateMultiple(students: UpdateStudentDto[]): Promise<void> {
    for (const student of students) {
      await this.studentsRepository.update({ id: student.id }, student);
    }
  }

  async remove(id: number): Promise<void> {
    await this.studentsRepository.delete(id);
  }
}
