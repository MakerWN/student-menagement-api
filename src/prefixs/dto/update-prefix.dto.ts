import { PartialType } from '@nestjs/mapped-types';
import { CreatePrefixDto } from './create-prefix.dto';

export class UpdatePrefixDto extends PartialType(CreatePrefixDto) {}
