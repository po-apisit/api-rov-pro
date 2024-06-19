import { Test, TestingModule } from '@nestjs/testing';
import { RovRuneController } from './rov-rune.controller';
import { RovRuneService } from './rov-rune.service';

describe('RovRuneController', () => {
  let controller: RovRuneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RovRuneController],
      providers: [RovRuneService],
    }).compile();

    controller = module.get<RovRuneController>(RovRuneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
