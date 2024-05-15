import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentmappingDto } from './create-studentmapping.dto';

export class UpdateStudentmappingDto extends PartialType(CreateStudentmappingDto) {}
