import { Test, TestingModule } from '@nestjs/testing';
import { RovSeasonService } from './rov-season.service';

describe('RovSeasonService', () => {
  let service: RovSeasonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RovSeasonService],
    }).compile();

    service = module.get<RovSeasonService>(RovSeasonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
