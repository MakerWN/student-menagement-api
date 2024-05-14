import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentmappingService } from './studentmapping.service';
import { CreateStudentmappingDto } from './dto/create-studentmapping.dto';
import { UpdateStudentmappingDto } from './dto/update-studentmapping.dto';

@Controller('studentmapping')
export class StudentmappingController {
  constructor(private readonly studentmappingService: StudentmappingService) {}

  @Post()
  create(@Body() createStudentmappingDto: CreateStudentmappingDto) {
    return this.studentmappingService.create(createStudentmappingDto);
  }

  @Get()
  findAll() {
    return this.studentmappingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentmappingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentmappingDto: UpdateStudentmappingDto) {
    return this.studentmappingService.update(+id, updateStudentmappingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentmappingService.remove(+id);
  }
}
