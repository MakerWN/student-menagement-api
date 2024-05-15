import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) { }

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  async filter(@Query() query: Record<string, any>) {
    return this.studentsService.getStudentWithSearch(query.search, query.filter);
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @Get('not/class')
  async getStudentFilterNot(){
    return this.studentsService.getStudentWithFilterNot();
  }

  @Patch('add-student-to-classroom')
  async updateMultipleUsers(@Body() users: UpdateStudentDto[]): Promise<any> {
    try {
      await this.studentsService.updateMultiple(users);
      return { success: true, message: 'Users updated successfully' };
    } catch (error) {
      return { success: false, message: 'Failed to update users', error };
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }
}
