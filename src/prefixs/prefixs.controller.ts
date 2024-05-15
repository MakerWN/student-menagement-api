import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrefixsService } from './prefixs.service';
import { CreatePrefixDto } from './dto/create-prefix.dto';
import { UpdatePrefixDto } from './dto/update-prefix.dto';

@Controller('prefixs')
export class PrefixsController {
  constructor(private readonly prefixsService: PrefixsService) {}

  @Post()
  create(@Body() createPrefixDto: CreatePrefixDto) {
    return this.prefixsService.create(createPrefixDto);
  }

  @Get()
  findAll() {
    return this.prefixsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prefixsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrefixDto: UpdatePrefixDto) {
    return this.prefixsService.update(+id, updatePrefixDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prefixsService.remove(+id);
  }
}
