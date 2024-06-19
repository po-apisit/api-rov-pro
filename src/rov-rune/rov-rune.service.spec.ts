import { Test, TestingModule } from '@nestjs/testing';
import { RovRuneService } from './rov-rune.service';

describe('RovRuneService', () => {
  let service: RovRuneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RovRuneService],
    }).compile();

    service = module.get<RovRuneService>(RovRuneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
