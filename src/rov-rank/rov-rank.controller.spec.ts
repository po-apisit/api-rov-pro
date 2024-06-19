import { Test, TestingModule } from '@nestjs/testing';
import { RovRankController } from './rov-rank.controller';
import { RovRankService } from './rov-rank.service';

describe('RovRankController', () => {
  let controller: RovRankController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RovRankController],
      providers: [RovRankService],
    }).compile();

    controller = module.get<RovRankController>(RovRankController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
