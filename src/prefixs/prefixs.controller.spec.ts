import { Test, TestingModule } from '@nestjs/testing';
import { PrefixsController } from './prefixs.controller';
import { PrefixsService } from './prefixs.service';

describe('PrefixsController', () => {
  let controller: PrefixsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrefixsController],
      providers: [PrefixsService],
    }).compile();

    controller = module.get<PrefixsController>(PrefixsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
