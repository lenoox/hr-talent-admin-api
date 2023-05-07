import { Test, TestingModule } from '@nestjs/testing';
import { JobOffersPublicController } from './job-offers-public.controller';

describe('JobOffersPublicController', () => {
  let controller: JobOffersPublicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobOffersPublicController],
    }).compile();

    controller = module.get<JobOffersPublicController>(
      JobOffersPublicController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
