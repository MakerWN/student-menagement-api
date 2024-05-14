import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentmappingDto } from './dto/create-studentmapping.dto';
import { UpdateStudentmappingDto } from './dto/update-studentmapping.dto';
import { Repository } from 'typeorm';
import { Studentmapping } from './entities/studentmapping.entity';

@Injectable()
export class StudentmappingService {
  constructor(
    @InjectRepository(Studentmapping)
    private studentmappingRepository: Repository<Studentmapping>
  ) { }

  create(createStudentmappingDto: CreateStudentmappingDto) {
    return this.studentmappingRepository.save(createStudentmappingDto);
  }

  findAll(): Promise<Studentmapping[]> {
    return this.studentmappingRepository.find();
  }
  findOne(id: number): Promise<Studentmapping | null> {
    return this.studentmappingRepository.findOneBy({ id });
  }

  update(id: number, updateStudentmappingDto: UpdateStudentmappingDto) {
    return this.studentmappingRepository.update(id, updateStudentmappingDto);
  }

  async remove(id: number): Promise<void> {
    await this.studentmappingRepository.delete(id);
  }
}
