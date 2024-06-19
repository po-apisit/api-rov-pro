import { Test, TestingModule } from '@nestjs/testing';
import { RovArrangeController } from './rov-arrange.controller';
import { RovArrangeService } from './rov-arrange.service';

describe('RovArrangeController', () => {
  let controller: RovArrangeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RovArrangeController],
      providers: [RovArrangeService],
    }).compile();

    controller = module.get<RovArrangeController>(RovArrangeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
