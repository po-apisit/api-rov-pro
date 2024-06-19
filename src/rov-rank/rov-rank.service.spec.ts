import { Test, TestingModule } from '@nestjs/testing';
import { RovRankService } from './rov-rank.service';

describe('RovRankService', () => {
  let service: RovRankService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RovRankService],
    }).compile();

    service = module.get<RovRankService>(RovRankService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
