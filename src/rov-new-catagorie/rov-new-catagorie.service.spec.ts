import { Test, TestingModule } from '@nestjs/testing';
import { RovNewCatagorieService } from './rov-new-catagorie.service';

describe('RovNewCatagorieService', () => {
  let service: RovNewCatagorieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RovNewCatagorieService],
    }).compile();

    service = module.get<RovNewCatagorieService>(RovNewCatagorieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
