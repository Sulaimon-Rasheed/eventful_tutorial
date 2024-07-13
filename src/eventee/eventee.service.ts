import { Injectable } from '@nestjs/common';
import { CreateEventeeDto } from './dto/create-eventee.dto';
import { UpdateEventeeDto } from './dto/update-eventee.dto';

@Injectable()
export class EventeeService {
  create(createEventeeDto: CreateEventeeDto) {
    return 'This action adds a new eventee';
  }

  findAll() {
    return `This action returns all eventee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventee`;
  }

  update(id: number, updateEventeeDto: UpdateEventeeDto) {
    return `This action updates a #${id} eventee`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventee`;
  }
}
