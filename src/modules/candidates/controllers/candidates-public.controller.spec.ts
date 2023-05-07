import { Test, TestingModule } from '@nestjs/testing';
import { CandidatesPublicController } from './candidates-public.controller';

describe('CandidatesPublicController', () => {
  let controller: CandidatesPublicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandidatesPublicController],
    }).compile();

    controller = module.get<CandidatesPublicController>(
      CandidatesPublicController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
