import {LocationRequest, LocationResponse} from "../../directories/locations/dto/location.dto";
import {SeniorityRequest, SeniorityResponse} from "../../directories/seniorities/dto/seniority.dto";

export class JobOfferRequest {
    id: string;
    position: string;
    offerDescription: string;
    seniorities: SeniorityRequest[];
    locations: LocationRequest[];
}
export class JobOfferResponse {
    id: string;
    position: string;
    offerDescription: string;
    seniorities: SeniorityResponse[];
    locations: LocationResponse[];
}