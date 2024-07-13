import { Module } from '@nestjs/common';
import { CreatorService } from './creator.service';
import { CreatorController } from './creator.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { creatorSchema } from './entities/creator.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"Creator", schema:creatorSchema}])],
  controllers: [CreatorController],
  providers: [CreatorService],
})
export class CreatorModule {}
