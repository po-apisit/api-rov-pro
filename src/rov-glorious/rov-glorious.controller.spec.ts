import { Test, TestingModule } from '@nestjs/testing';
import { RovGloriousController } from './rov-glorious.controller';
import { RovGloriousService } from './rov-glorious.service';

describe('RovGloriousController', () => {
  let controller: RovGloriousController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RovGloriousController],
      providers: [RovGloriousService],
    }).compile();

    controller = module.get<RovGloriousController>(RovGloriousController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
