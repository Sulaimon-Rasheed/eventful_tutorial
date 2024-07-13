import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CreatorModule } from './creator/creator.module';
import { EventeeModule } from './eventee/eventee.module';
import * as dotenv from "dotenv"
dotenv.config()

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URL), CreatorModule, EventeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
