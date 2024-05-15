import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Repository } from 'typeorm';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GendersService {
  constructor(
    @InjectRepository(Gender)
    private gendersRepository: Repository<Gender>
  ) { }
  create(createGenderDto: CreateGenderDto) {
    return this.gendersRepository.save(createGenderDto);
  }

  findAll(): Promise<Gender[]> {
    return this.gendersRepository.find();
  }

  findOne(id: number): Promise<Gender | null> {
    return this.gendersRepository.findOneBy({ id });
  }

  update(id: number, updateGenderDto: UpdateGenderDto) {
    return this.gendersRepository.update(id, updateGenderDto);
  }

  async remove(id: number): Promise<void> {
    await this.gendersRepository.delete(id);
  }
}
