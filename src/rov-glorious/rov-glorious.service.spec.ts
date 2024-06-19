import { Test, TestingModule } from '@nestjs/testing';
import { RovGloriousService } from './rov-glorious.service';

describe('RovGloriousService', () => {
  let service: RovGloriousService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RovGloriousService],
    }).compile();

    service = module.get<RovGloriousService>(RovGloriousService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
