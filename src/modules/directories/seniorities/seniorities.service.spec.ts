import { Test, TestingModule } from '@nestjs/testing';
import { SenioritiesService } from './seniorities.service';

describe('SenioritiesService', () => {
  let service: SenioritiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SenioritiesService],
    }).compile();

    service = module.get<SenioritiesService>(SenioritiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
