import { Test, TestingModule } from '@nestjs/testing';
import { RovHeroController } from './rov-hero.controller';
import { RovHeroService } from './rov-hero.service';

describe('RovHeroController', () => {
  let controller: RovHeroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RovHeroController],
      providers: [RovHeroService],
    }).compile();

    controller = module.get<RovHeroController>(RovHeroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
