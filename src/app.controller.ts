import { Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller("eventee")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("signup")
  getHome(@Res() res:Response){
    this.appService.getHome(res);
  }
}

