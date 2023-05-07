import { Test, TestingModule } from '@nestjs/testing';
import { LocationsPublicController } from './locations-public.controller';

describe('LocationsPublicController', () => {
  let controller: LocationsPublicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationsPublicController],
    }).compile();

    controller = module.get<LocationsPublicController>(
      LocationsPublicController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
