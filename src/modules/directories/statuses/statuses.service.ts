import { Injectable } from '@nestjs/common';
import {StatusEntity} from "./entities/status.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class StatusesService {
    constructor(
        @InjectRepository(StatusEntity)
        private seniorityRepository: Repository<StatusEntity>,
    ) {}

    findAll() {
        return this.seniorityRepository.find();
    }

    findOne(id: string) {
        return this.seniorityRepository.findOneBy({id});
    }
}