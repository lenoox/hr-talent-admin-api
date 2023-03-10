import { Module } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { CandidatesController } from './candidates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { CandidateEntity } from './entities/candidate.entity';
import { CandidatesMapper } from './mappers/candidates-mapper.service';
import { StatusesService } from '../directories/statuses/statuses.service';
import { StatusEntity } from '../directories/statuses/entities/status.entity';

const MODULES = [
  TypeOrmModule.forFeature([CandidateEntity, StatusEntity]),
  SharedModule,
];
const PROVIDERS = [CandidatesService, CandidatesMapper, StatusesService];
const CONTROLLERS = [CandidatesController];
@Module({
  imports: [...MODULES],
  providers: [...PROVIDERS],
  controllers: [...CONTROLLERS],
})
export class CandidatesModule {}
