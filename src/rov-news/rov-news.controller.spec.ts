import { Test, TestingModule } from '@nestjs/testing';
import { RovNewsController } from './rov-news.controller';
import { RovNewsService } from './rov-news.service';

describe('RovNewsController', () => {
  let controller: RovNewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RovNewsController],
      providers: [RovNewsService],
    }).compile();

    controller = module.get<RovNewsController>(RovNewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
