import {LocationRequest, LocationResponse} from "../../directories/locations/dto/location.dto";


export class CandidateRequest {
    firstName: string;
    lastName: string;
    locations: LocationRequest[]
    position: string;
    attachment: string;
    aboutMe: string;
    status: string;
}
export class CandidateResponse {
    firstName: string;
    lastName: string;
    locations: LocationResponse[]
    position: string;
    attachment: string;
    aboutMe: string;
    status: string;
}