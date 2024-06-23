import { Test, TestingModule } from '@nestjs/testing';
import { RovItemCatagorieController } from './rov-item-catagorie.controller';
import { RovItemCatagorieService } from './rov-item-catagorie.service';

describe('RovItemCatagorieController', () => {
  let controller: RovItemCatagorieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RovItemCatagorieController],
      providers: [RovItemCatagorieService],
    }).compile();

    controller = module.get<RovItemCatagorieController>(RovItemCatagorieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
