import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {LocationEntity} from "./entities/location.entity";
import {SeniorityEntity} from "./entities/seniority.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([LocationEntity,SeniorityEntity])
    ]
})
export class SharedModule {}
