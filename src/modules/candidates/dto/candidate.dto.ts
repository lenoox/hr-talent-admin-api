import {LocationEntity} from "../../../shared/entities/location.entity";


export class CandidateDto {
    firstName: string;
    lastName: string;
    locations: LocationEntity[]
    position: string;
    attachment: string;
    aboutMe: string;
    status: string;
}