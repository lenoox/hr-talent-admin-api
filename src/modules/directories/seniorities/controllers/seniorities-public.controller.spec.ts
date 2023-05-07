import { Test, TestingModule } from '@nestjs/testing';
import { SenioritiesPublicController } from './seniorities-public.controller';

describe('SenioritiesPublicController', () => {
  let controller: SenioritiesPublicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SenioritiesPublicController],
    }).compile();

    controller = module.get<SenioritiesPublicController>(
      SenioritiesPublicController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
