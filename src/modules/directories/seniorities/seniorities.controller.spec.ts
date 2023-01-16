import { Test, TestingModule } from '@nestjs/testing';
import { SenioritiesController } from './seniorities.controller';

describe('SenioritiesController', () => {
  let controller: SenioritiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SenioritiesController],
    }).compile();

    controller = module.get<SenioritiesController>(SenioritiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
