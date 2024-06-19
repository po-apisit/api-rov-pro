import { Test, TestingModule } from '@nestjs/testing';
import { RovSeasonController } from './rov-season.controller';
import { RovSeasonService } from './rov-season.service';

describe('RovSeasonController', () => {
  let controller: RovSeasonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RovSeasonController],
      providers: [RovSeasonService],
    }).compile();

    controller = module.get<RovSeasonController>(RovSeasonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
