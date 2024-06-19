import { Test, TestingModule } from '@nestjs/testing';
import { RovArrangeService } from './rov-arrange.service';

describe('RovArrangeService', () => {
  let service: RovArrangeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RovArrangeService],
    }).compile();

    service = module.get<RovArrangeService>(RovArrangeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
