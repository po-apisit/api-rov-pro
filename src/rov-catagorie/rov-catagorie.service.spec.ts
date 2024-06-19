import { Test, TestingModule } from '@nestjs/testing';
import { RovCatagorieService } from './rov-catagorie.service';

describe('RovCatagorieService', () => {
  let service: RovCatagorieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RovCatagorieService],
    }).compile();

    service = module.get<RovCatagorieService>(RovCatagorieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
