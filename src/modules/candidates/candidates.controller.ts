import {
    Body,
    Controller, Delete,
    Get,
    Param,
    Post,
    StreamableFile,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
import {createReadStream} from "fs";
import {CandidatesService} from "./candidates.service";
import {CandidateEntity} from "./entities/candidate.entity";
import {diskStorage} from "multer";
import {CandidateDto} from "./dto/candidate.dto";
import { extname } from 'path'
const { join } = require("path");
@Controller('candidates')
export class CandidatesController {
    constructor(private candidatesService: CandidatesService) {}
    @Get(':id')
    findOne(@Param('id') id: string): Promise<CandidateEntity> {
        return this.candidatesService.findOne(id);
    }
    @Get('/')
    findAll(): Promise<CandidateEntity[]> {
        return this.candidatesService.findAll();
    }

    @Post('/')
    @UseInterceptors(FileInterceptor('attachment', {
        storage: diskStorage({
            destination: './uploads/files',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() =>
                    (Math.round(Math.random() * 16)).toString(16)).join('');
                return cb(null, `${randomName}${extname(file.originalname)}`);
            },
        }),
    }))
    addFile(
        @Body() candidateDto: CandidateDto,
        @UploadedFile() file): Promise<any> {
        return this.candidatesService.addFile(candidateDto, file);
    }

    @Get('/file/:id')
    getFile(@Param('id') id: string) {
        const file = createReadStream(join(process.cwd(), './uploads/files/'+id));
        return new StreamableFile(file);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.candidatesService.remove(id);
    }
}
