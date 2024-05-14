import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePrefixDto } from './dto/create-prefix.dto';
import { UpdatePrefixDto } from './dto/update-prefix.dto';
import { Repository } from 'typeorm';
import { Prefixs } from './entities/prefix.entity';

@Injectable()
export class PrefixsService {
  constructor(
    @InjectRepository(Prefixs)
    private prefixsRepository: Repository<Prefixs>
  ) { }
  create(createPrefixDto: CreatePrefixDto) {
    return this.prefixsRepository.save(createPrefixDto);
  }

  findAll(): Promise<Prefixs[]> {
    return this.prefixsRepository.find();
  }

  findOne(id: number): Promise<Prefixs | null> {
    return this.prefixsRepository.findOneBy({ id });
  }

  update(id: number, updatePrefixDto: UpdatePrefixDto) {
    return this.prefixsRepository.update(id, updatePrefixDto);
  }

  async remove(id: number): Promise<void> {
    await this.prefixsRepository.delete(id);
  }
}
