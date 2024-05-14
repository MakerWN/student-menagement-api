import { Module } from '@nestjs/common';
import { StudentmappingService } from './studentmapping.service';
import { StudentmappingController } from './studentmapping.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Studentmapping } from './entities/studentmapping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Studentmapping])],
  controllers: [StudentmappingController],
  providers: [StudentmappingService],
})
export class StudentmappingModule {}
