import { Test, TestingModule } from '@nestjs/testing';
import { PrefixsService } from './prefixs.service';

describe('PrefixsService', () => {
  let service: PrefixsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrefixsService],
    }).compile();

    service = module.get<PrefixsService>(PrefixsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
