import {
    Body,
    Controller, DefaultValuePipe, Delete,
    Get,
    Param, ParseIntPipe,
    Post, Put, Query,
    StreamableFile,
    UploadedFile, UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
import {createReadStream} from "fs";
import {CandidatesService} from "./candidates.service";
import {CandidateEntity} from "./entities/candidate.entity";
import {diskStorage} from "multer";
import {CandidateRequest, CandidateResponse} from "./dto/candidate.dto";
import { extname } from 'path'
import {Pagination} from "nestjs-typeorm-paginate";
import {JwtTwoFactorGuard} from "../../core/authentication/jwt-two-factor.guard";
const { join } = require("path");

@Controller('candidates')
export class CandidatesController {
    constructor(private candidatesService: CandidatesService) {}

    @Get(':id')
    @UseGuards(JwtTwoFactorGuard)
    findOne(@Param('id') id: string): Promise<CandidateResponse> {
        return this.candidatesService.findOne(id);
    }

    @Get('/')
    @UseGuards(JwtTwoFactorGuard)
    findAll(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10
    ): Promise<Pagination<CandidateEntity>> {
        return this.candidatesService.findAll({
            page,
            limit
        });
    }

    @Put(':id')
    @UseGuards(JwtTwoFactorGuard)
    update(@Param('id') id: string, @Body() candidateDto: CandidateRequest): Promise<CandidateResponse> {
        return this.candidatesService.update(id,candidateDto);
    }

    @Post('/:id')
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
        @Param('id') id: string,
        @Body() candidateDto: CandidateRequest,
        @UploadedFile() file): Promise<CandidateResponse> {
        return this.candidatesService.addFile(id,candidateDto, file);
    }

    @Get('/file/:id')
    @UseGuards(JwtTwoFactorGuard)
    getFile(@Param('id') id: string) {
        const file = createReadStream(join(process.cwd(), './uploads/files/'+id));
        return new StreamableFile(file);
    }

    @Delete(':id')
    @UseGuards(JwtTwoFactorGuard)
    remove(@Param('id') id: string) {
        return this.candidatesService.remove(id);
    }
}
