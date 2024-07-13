import { Test, TestingModule } from '@nestjs/testing';
import { EventeeController } from './eventee.controller';
import { EventeeService } from './eventee.service';

describe('EventeeController', () => {
  let controller: EventeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventeeController],
      providers: [EventeeService],
    }).compile();

    controller = module.get<EventeeController>(EventeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
