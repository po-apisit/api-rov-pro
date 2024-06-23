import { Test, TestingModule } from '@nestjs/testing';
import { RovNewContentController } from './rov-new-content.controller';
import { RovNewContentService } from './rov-new-content.service';

describe('RovNewContentController', () => {
  let controller: RovNewContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RovNewContentController],
      providers: [RovNewContentService],
    }).compile();

    controller = module.get<RovNewContentController>(RovNewContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
