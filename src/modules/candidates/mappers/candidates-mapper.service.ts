import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {CandidateEntity} from "../entities/candidate.entity";
import {CandidateRequest, CandidateResponse} from "../dto/candidate.dto";

@Injectable()
export class CandidatesMapper {
    constructor(
        @InjectRepository(CandidateEntity)
        private candidatesRepository: Repository<CandidateEntity>,
    ) {}
    dtoToEntity(jobOfferRequest: CandidateRequest):any{
        const jobOffer = {
            ...jobOfferRequest,
            locations: jobOfferRequest.locations,
            status: jobOfferRequest.status
        }
        return jobOffer;
    }
    async entityToDto(jobOfferEntity: CandidateEntity):Promise<CandidateResponse>{
        const id = jobOfferEntity.id;
        jobOfferEntity = await this.candidatesRepository.findOneBy({id})
        const jobOfferDto:CandidateResponse = {
            ...jobOfferEntity,
            locations: jobOfferEntity.locations,
            status: jobOfferEntity.status
        }
        return jobOfferDto;
    }
}
