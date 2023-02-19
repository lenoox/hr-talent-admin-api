import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {CandidateEntity} from "../entities/candidate.entity";
import {CandidateRequest, CandidateResponse} from "../dto/candidate.dto";
import {StatusesService} from "../../directories/statuses/statuses.service";

@Injectable()
export class CandidatesMapper {
    constructor(
        @InjectRepository(CandidateEntity)
        private candidatesRepository: Repository<CandidateEntity>,
        private statusesService: StatusesService,
    ) {}
    async dtoToEntity(jobOfferRequest: CandidateRequest, isPublic, id: string = null):Promise<any>{
       const status = await this.statusesService.findByName('APPLIED');
        const jobOffer = {
            ...jobOfferRequest,
            locations: jobOfferRequest.locations,
            status: {id:isPublic?status.id:jobOfferRequest.status},
            jobOffer: [{id}]
        }
        return jobOffer;
    }

    async entityToDto(jobOfferEntity: CandidateEntity):Promise<CandidateResponse>{
        const id = jobOfferEntity.id;
        jobOfferEntity = await this.candidatesRepository.findOneBy({id})
        const jobOfferDto:CandidateResponse = {
            ...jobOfferEntity,
            locations: jobOfferEntity.locations,
            status: jobOfferEntity.status,
            jobOffer: jobOfferEntity?.jobOffer?.map(({id,position})=>{
               return {
                   id:id,
                   position:position
               }
            }),
        }
        return jobOfferDto;
    }
}
