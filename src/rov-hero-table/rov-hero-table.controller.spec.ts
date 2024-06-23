import { Test, TestingModule } from '@nestjs/testing';
import { RovHeroTableController } from './rov-hero-table.controller';
import { RovHeroTableService } from './rov-hero-table.service';

describe('RovHeroTableController', () => {
  let controller: RovHeroTableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RovHeroTableController],
      providers: [RovHeroTableService],
    }).compile();

    controller = module.get<RovHeroTableController>(RovHeroTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
