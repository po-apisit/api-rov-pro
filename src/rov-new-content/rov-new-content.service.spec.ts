import { Test, TestingModule } from '@nestjs/testing';
import { RovNewContentService } from './rov-new-content.service';

describe('RovNewContentService', () => {
  let service: RovNewContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RovNewContentService],
    }).compile();

    service = module.get<RovNewContentService>(RovNewContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
