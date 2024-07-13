import { Module } from '@nestjs/common';
import { EventeeService } from './eventee.service';
import { EventeeController } from './eventee.controller';
import { eventeeSchema } from './entities/eventee.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:"Eventee", schema:eventeeSchema}])],
  controllers: [EventeeController],
  providers: [EventeeService],
})
export class EventeeModule {}
