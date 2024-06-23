import { Test, TestingModule } from '@nestjs/testing';
import { RovNewsService } from './rov-news.service';

describe('RovNewsService', () => {
  let service: RovNewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RovNewsService],
    }).compile();

    service = module.get<RovNewsService>(RovNewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
