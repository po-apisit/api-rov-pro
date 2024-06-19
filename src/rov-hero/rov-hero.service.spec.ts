import { Test, TestingModule } from '@nestjs/testing';
import { RovHeroService } from './rov-hero.service';

describe('RovHeroService', () => {
  let service: RovHeroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RovHeroService],
    }).compile();

    service = module.get<RovHeroService>(RovHeroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
