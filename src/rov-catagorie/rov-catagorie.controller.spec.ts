import { Test, TestingModule } from '@nestjs/testing';
import { RovCatagorieController } from './rov-catagorie.controller';
import { RovCatagorieService } from './rov-catagorie.service';

describe('RovCatagorieController', () => {
  let controller: RovCatagorieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RovCatagorieController],
      providers: [RovCatagorieService],
    }).compile();

    controller = module.get<RovCatagorieController>(RovCatagorieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
