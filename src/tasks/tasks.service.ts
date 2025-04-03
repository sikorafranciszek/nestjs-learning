import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Cron('01 01 20 * * *', {
    timeZone: 'Europe/Warsaw',
  })
  handleCron2() {
    this.logger.debug('20pm helloooooo!');
  }
}
