import { Injectable } from '@nestjs/common';
import { CreateCreatorDto } from './dto/create-creator.dto';
import { UpdateCreatorDto } from './dto/update-creator.dto';
import { Request, Response } from 'express';
import {v2} from "cloudinary"
import * as dotenv from "dotenv"
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Creator } from './entities/creator.entity';
dotenv.config()
import * as encoding from "../utils/bcrypt"

@Injectable()
export class CreatorService {
  constructor(@InjectModel("Creator") private readonly creatorModel:Model<Creator>){
    v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async create(
    createCreatorDto: CreateCreatorDto,
    profileImage:any,
    req:Request,
    res:Response
  ) {
   
   try{

    const existingUser = await this.creatorModel.findOne({email:createCreatorDto.email})

    if(existingUser){
      return res.status(409).json({
        statusCode:409,
        message:"User already exist"
      })
    }

      const result = await v2.uploader.upload( profileImage.path, {
        folder: 'eventful_tutorial_creators',
      });
      if (!result) {
        return res.status(500).json({
          statusCode:500,
          message:"Something broke while uploading image. Try again."
        })
      }

      let encryptedPassword = encoding.encodeString(createCreatorDto.password)
      
      const newUser = this.creatorModel.create({
        creator_name:createCreatorDto.creator_name,
        company_name:createCreatorDto.company_name,
        password:encryptedPassword,
        email:createCreatorDto.email,
        country:createCreatorDto.country,
        state:createCreatorDto.state,
        profileImage:result,
      })

   }catch(err){
    return res.status(500).json({
      statusCode:500,
      message:err.message
    })

   }

  }

  findAll() {
    return `This action returns all creator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} creator`;
  }

  update(id: number, updateCreatorDto: UpdateCreatorDto) {
    return `This action updates a #${id} creator`;
  }

  remove(id: number) {
    return `This action removes a #${id} creator`;
  }
}
