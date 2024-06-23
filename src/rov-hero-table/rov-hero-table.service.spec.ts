import { Test, TestingModule } from '@nestjs/testing';
import { RovHeroTableService } from './rov-hero-table.service';

describe('RovHeroTableService', () => {
  let service: RovHeroTableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RovHeroTableService],
    }).compile();

    service = module.get<RovHeroTableService>(RovHeroTableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
