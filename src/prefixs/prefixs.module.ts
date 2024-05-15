import { Module } from '@nestjs/common';
import { PrefixsService } from './prefixs.service';
import { PrefixsController } from './prefixs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prefixs } from './entities/prefix.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prefixs])],
  controllers: [PrefixsController],
  providers: [PrefixsService],
})
export class PrefixsModule {}
