import { Test, TestingModule } from '@nestjs/testing';
import { RovHeroTopController } from './rov-hero-top.controller';
import { RovHeroTopService } from './rov-hero-top.service';

describe('RovHeroTopController', () => {
  let controller: RovHeroTopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RovHeroTopController],
      providers: [RovHeroTopService],
    }).compile();

    controller = module.get<RovHeroTopController>(RovHeroTopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
