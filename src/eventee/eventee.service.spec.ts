import { Test, TestingModule } from '@nestjs/testing';
import { EventeeService } from './eventee.service';

describe('EventeeService', () => {
  let service: EventeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventeeService],
    }).compile();

    service = module.get<EventeeService>(EventeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
