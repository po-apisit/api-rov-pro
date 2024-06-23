import { Test, TestingModule } from '@nestjs/testing';
import { RovHeroTopService } from './rov-hero-top.service';

describe('RovHeroTopService', () => {
  let service: RovHeroTopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RovHeroTopService],
    }).compile();

    service = module.get<RovHeroTopService>(RovHeroTopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
