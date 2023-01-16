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
import {CandidateEntity} from "./entities/candidate.entity";
import {CandidateRequest} from "./dto/candidate.dto";

@Injectable()
export class CandidatesService {
    constructor(
        @InjectRepository(CandidateEntity)
        private candidatesRepository: Repository<CandidateEntity>,
    ) {}

    findAll() {
        return this.candidatesRepository.find();
    }

    findOne(id: string) {
        return this.candidatesRepository.findOneBy({id});
    }

    remove(id: string) {
        return this.candidatesRepository.delete(id);
    }

    async addFile(eventData: CandidateRequest, file: any): Promise<CandidateEntity> {
        eventData.attachment = (file) ? file.filename : '';
        return await this.candidatesRepository.save(eventData);
    }
}
