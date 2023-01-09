import { Module } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { CandidatesController } from './candidates.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SharedModule} from "../../shared/shared.module";
import {CandidateEntity} from "./entities/candidate.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([CandidateEntity]),
    SharedModule
  ],
  providers: [CandidatesService],
  controllers: [CandidatesController]
})
export class CandidatesModule {}
