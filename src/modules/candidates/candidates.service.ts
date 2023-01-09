import {
    Body,
    Get,
    Injectable,
    Param,
    Post,
    Req,
    Res,
    StreamableFile,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {JobOfferDto} from "../job-offers/dto/job-offer.dto";
import {CandidateEntity} from "./entities/candidate.entity";
import {FileInterceptor} from "@nestjs/platform-express";
import path from "path";
import * as fs from "fs";
import {CandidateDto} from "./dto/candidate.dto";

@Injectable()
export class CandidatesService {
    constructor(
        @InjectRepository(CandidateEntity)
        private candidatesRepository: Repository<CandidateEntity>,
    ) {}

   /* create(jobOffer: JobOfferDto) {
        return this.candidatesRepository.save(jobOffer);
    }*/

    findAll() {
        return this.candidatesRepository.find();
    }

    findOne(id: string) {
        return this.candidatesRepository.findOneBy({ id });
    }

    update(id: string, jobOfferDto: JobOfferDto) {
        return this.candidatesRepository.update(id, jobOfferDto);
    }

    remove(id: string) {
        return this.candidatesRepository.delete(id);
    }

    async addFile(eventData: CandidateDto, file: any): Promise<CandidateEntity> {
        eventData.attachment = (file) ? file.filename : '';
        return await this.candidatesRepository.save(eventData);
    }
}
