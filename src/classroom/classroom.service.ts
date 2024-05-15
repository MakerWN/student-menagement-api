import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { Repository, ILike } from 'typeorm';
import { Classroom } from './entities/classroom.entity';

@Injectable()
export class ClassroomService {
  constructor(
    @InjectRepository(Classroom)
    private classroomsRepository: Repository<Classroom>,
  ) { }

  create(createClassroomDto: CreateClassroomDto) {
    return this.classroomsRepository.save(createClassroomDto);
  }

  findAll(): Promise<Classroom[]> {
    return this.classroomsRepository.find();
  }

  async getClassRoomWithSearch(search: string): Promise<Classroom[]> {
    const query = await this.classroomsRepository.find({
      where: [
        { classNo: ILike(`%${search || ''}%`) },
        { className: ILike(`%${search || ''}%`) },
        { teacher: ILike(`%${search || ''}%`) }
      ],
    });
    return query;
  }

  findOne(id: number): Promise<Classroom | null> {
    return this.classroomsRepository.findOneBy({ id });
  }

  update(id: number, updateClassroomDto: UpdateClassroomDto) {
    return this.classroomsRepository.update(id, updateClassroomDto);
  }

  async remove(id: number): Promise<void> {
    await this.classroomsRepository.delete(id);
  }
}
