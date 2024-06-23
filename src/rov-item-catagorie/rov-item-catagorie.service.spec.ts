import { Test, TestingModule } from '@nestjs/testing';
import { RovItemCatagorieService } from './rov-item-catagorie.service';

describe('RovItemCatagorieService', () => {
  let service: RovItemCatagorieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RovItemCatagorieService],
    }).compile();

    service = module.get<RovItemCatagorieService>(RovItemCatagorieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
