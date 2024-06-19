import { Test, TestingModule } from '@nestjs/testing';
import { RovItemController } from './rov-item.controller';
import { RovItemService } from './rov-item.service';

describe('RovItemController', () => {
  let controller: RovItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RovItemController],
      providers: [RovItemService],
    }).compile();

    controller = module.get<RovItemController>(RovItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
