import { Test, TestingModule } from '@nestjs/testing';
import { RovMedService } from './rov-med.service';

describe('RovMedService', () => {
  let service: RovMedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RovMedService],
    }).compile();

    service = module.get<RovMedService>(RovMedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
