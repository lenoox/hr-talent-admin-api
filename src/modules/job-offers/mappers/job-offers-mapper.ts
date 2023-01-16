import {JobOfferRequest, JobOfferResponse} from "../dto/job-offer.dto";
import {JobOfferEntity} from "../entities/job-offer.entity";
import {LocationEntity} from "../../directories/locations/entities/location.entity";
import {SeniorityEntity} from "../../directories/seniorities/entities/seniority.entity";
import {SeniorityRequest} from "../../directories/seniorities/dto/seniority.dto";
import {LocationRequest} from "../../directories/locations/dto/location.dto";
export function dtoToEntity(jobOfferRequest: JobOfferRequest):any{
    const jobOffer = {
        ...jobOfferRequest,
        seniorities: jobOfferRequest.seniorities.map((seniority:SeniorityRequest)=>seniority),
        locations: jobOfferRequest.locations.map((location:LocationRequest)=>location)
    }
    return jobOffer;
}
export function entityToDto(jobOfferEntity: JobOfferEntity):JobOfferResponse{
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