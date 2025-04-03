import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './tasks/tasks.service';
import { BullModule } from '@nestjs/bullmq';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { MessageService } from './message/message.service';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT!) || 6379,
      },
    }),
    DatabaseModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService, TasksService, DatabaseService, MessageService],
})
export class AppModule {}
