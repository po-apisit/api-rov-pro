import { Test, TestingModule } from '@nestjs/testing';
import { RovNewCatagorieController } from './rov-new-catagorie.controller';
import { RovNewCatagorieService } from './rov-new-catagorie.service';

describe('RovNewCatagorieController', () => {
  let controller: RovNewCatagorieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RovNewCatagorieController],
      providers: [RovNewCatagorieService],
    }).compile();

    controller = module.get<RovNewCatagorieController>(RovNewCatagorieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
