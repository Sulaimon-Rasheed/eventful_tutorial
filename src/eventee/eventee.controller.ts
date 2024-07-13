import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventeeService } from './eventee.service';
import { CreateEventeeDto } from './dto/create-eventee.dto';
import { UpdateEventeeDto } from './dto/update-eventee.dto';

@Controller('eventee')
export class EventeeController {
  constructor(private readonly eventeeService: EventeeService) {}

  @Post()
  create(@Body() createEventeeDto: CreateEventeeDto) {
    return this.eventeeService.create(createEventeeDto);
  }

  @Get()
  findAll() {
    return this.eventeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventeeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventeeDto: UpdateEventeeDto) {
    return this.eventeeService.update(+id, updateEventeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventeeService.remove(+id);
  }
}
