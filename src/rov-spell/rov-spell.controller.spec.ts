import { Test, TestingModule } from '@nestjs/testing';
import { RovSpellController } from './rov-spell.controller';
import { RovSpellService } from './rov-spell.service';

describe('RovSpellController', () => {
  let controller: RovSpellController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RovSpellController],
      providers: [RovSpellService],
    }).compile();

    controller = module.get<RovSpellController>(RovSpellController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
