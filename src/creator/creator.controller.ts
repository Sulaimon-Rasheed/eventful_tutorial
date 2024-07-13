import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseInterceptors, UploadedFile, Req, Res } from '@nestjs/common';
import { CreatorService } from './creator.service';
import { CreateCreatorDto } from './dto/create-creator.dto';
import { UpdateCreatorDto } from './dto/update-creator.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from 'src/config/multer.config';
import { Request, Response } from 'express';

@Controller('creator')
export class CreatorController {
  constructor(private readonly creatorService: CreatorService) {}

  @Post("signup")
  @UseInterceptors(FileInterceptor("profileImage", multerConfig))
  create(@UploadedFile() profileImage:Express.Multer.File, @Body(new ValidationPipe) createCreatorDto: CreateCreatorDto, @Req() req:Request, @Res() res:Response) {
    return this.creatorService.create(createCreatorDto, profileImage, req, res);
  }

  @Get()
  findAll() {
    return this.creatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creatorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreatorDto: UpdateCreatorDto) {
    return this.creatorService.update(+id, updateCreatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creatorService.remove(+id);
  }
}
