import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class AppService {
  getHome(res:Response): object {
    return res.status(200).json({
      message:"Welcome to Eventful"
    })
  }
}
