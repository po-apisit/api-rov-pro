import { Test, TestingModule } from '@nestjs/testing';
import { RovItemService } from './rov-item.service';

describe('RovItemService', () => {
  let service: RovItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RovItemService],
    }).compile();

    service = module.get<RovItemService>(RovItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
