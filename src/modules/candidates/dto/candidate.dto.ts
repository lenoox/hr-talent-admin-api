import {LocationResponse} from "../../directories/locations/dto/location.dto";
import {StatusResponse} from "../../directories/statuses/dto/seniority.dto";


export class CandidateRequest {
    id:string;
    firstName: string;
    lastName: string;
    locations: string;
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
    status: StatusResponse;
}