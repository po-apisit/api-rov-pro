import { Test, TestingModule } from '@nestjs/testing';
import { RovMedController } from './rov-med.controller';
import { RovMedService } from './rov-med.service';

describe('RovMedController', () => {
  let controller: RovMedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RovMedController],
      providers: [RovMedService],
    }).compile();

    controller = module.get<RovMedController>(RovMedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
