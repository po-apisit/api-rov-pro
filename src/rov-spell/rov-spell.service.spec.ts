import { Test, TestingModule } from '@nestjs/testing';
import { RovSpellService } from './rov-spell.service';

describe('RovSpellService', () => {
  let service: RovSpellService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RovSpellService],
    }).compile();

    service = module.get<RovSpellService>(RovSpellService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
