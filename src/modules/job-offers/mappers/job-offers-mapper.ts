import {JobOfferRequest, JobOfferResponse} from "../dto/job-offer.dto";
import {JobOfferEntity} from "../entities/job-offer.entity";
import {LocationEntity} from "../../directories/locations/entities/location.entity";
import {SeniorityEntity} from "../../directories/seniorities/entities/seniority.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
@Injectable()
export class JobOffersMapper {
    constructor(
        @InjectRepository(JobOfferEntity)
        private jobOfferRepository: Repository<JobOfferEntity>,
    ) {}
    dtoToEntity(jobOfferRequest: JobOfferRequest):any{
        const jobOffer = {
            ...jobOfferRequest,
            seniorities: jobOfferRequest.seniorities.map((id:string)=>{
                return {id}
            }),
            locations: jobOfferRequest.locations.map((id:string)=> {
                return {id}
            })
        }
        return jobOffer;
    }
    async entityToDto(jobOfferEntity: JobOfferEntity):Promise<JobOfferResponse>{
        const id = jobOfferEntity.id;
        jobOfferEntity = await this.jobOfferRepository.findOneBy({id})
        const jobOfferDto:JobOfferResponse = {
            ...jobOfferEntity,
            seniorities: jobOfferEntity.seniorities.map((seniority:SeniorityEntity)=>{
                return seniority;
            }),
            locations: jobOfferEntity.locations.map((seniority:LocationEntity)=>{
                return seniority;
            }),
        }
        return jobOfferDto;
    }
}
