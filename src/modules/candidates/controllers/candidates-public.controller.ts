import {
  Body,
  Controller,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CandidateRequest, CandidateResponse } from '../dto/candidate.dto';
import { CandidatesService } from '../candidates.service';

@Controller('/public/candidates')
export class CandidatesPublicController {
  constructor(private candidatesService: CandidatesService) {}

  @Post('/:id')
  @UseInterceptors(
    FileInterceptor('attachment', {
      storage: diskStorage({
        destination: './uploads/files',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  addFile(
    @Param('id') id: string,
    @Body() candidateDto: CandidateRequest,
    @UploadedFile() file,
  ): Promise<CandidateResponse> {
    return this.candidatesService.addFile(id, candidateDto, file);
  }
}
