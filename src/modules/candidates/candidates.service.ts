import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CandidateEntity} from "./entities/candidate.entity";
import {CandidateRequest, CandidateResponse} from "./dto/candidate.dto";
import {IPaginationOptions, paginate, Pagination} from "nestjs-typeorm-paginate";
import {JobOfferEntity} from "../job-offers/entities/job-offer.entity";
import {CandidatesMapper} from "./mappers/candidates-mapper.service";

@Injectable()
export class CandidatesService {
    constructor(
        @InjectRepository(CandidateEntity)
        private candidatesRepository: Repository<CandidateEntity>,
        private candidatesMapper: CandidatesMapper,
    ) {}

    findAll(options: IPaginationOptions):Promise<Pagination<CandidateEntity>>  {
        return paginate<CandidateEntity>(this.candidatesRepository,options);
    }

    findOne(id: string) {
        return this.candidatesRepository.findOneBy({id}).then(
            (jobOffer:CandidateEntity)=>this.candidatesMapper.entityToDto(jobOffer)
        );;
    }

    remove(id: string) {
        return this.candidatesRepository.delete(id);
    }

    async addFile(eventData: CandidateRequest, file: any): Promise<CandidateResponse> {
        const eventDataEntity = this.candidatesMapper.dtoToEntity(eventData)

        eventDataEntity.attachment = (file) ? file.filename : '';
         const candidate = await this.candidatesRepository.save(eventDataEntity);
         const id = candidate.id;
        return await this.candidatesRepository.findOneBy({id}).then(
            (jobOffer:CandidateEntity)=>this.candidatesMapper.entityToDto(jobOffer)
        );
    }
    async update(id: string, candidateRequest: CandidateRequest):Promise<CandidateResponse> {
        candidateRequest.id = id;
        const candidate = await this.candidatesRepository.findOneBy({id});
        const jobOfferEntity = this.candidatesMapper.dtoToEntity(candidateRequest)
        Object.assign(candidate, jobOfferEntity);
        return await this.candidatesRepository.save(candidate).then(
            (jobOffer:CandidateEntity)=>this.candidatesMapper.entityToDto(jobOffer)
        );
    }
}
