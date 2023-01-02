import {SeniorityDto} from "../../../shared/dto/seniority.dto";
import {LocationDto} from "../../../shared/dto/location.dto";


export class JobOfferDto {
    id: string;
    position: string;
    offerDescription: string;
    seniorities: SeniorityDto[];
    locations: LocationDto[];
}