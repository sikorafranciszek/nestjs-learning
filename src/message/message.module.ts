import { Module } from '@nestjs/common';
import { MessageEventsListener } from './message.listener';
import { BullModule } from '@nestjs/bullmq';
import { MessageConsumer } from './message.consumer';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'message',
    }),
  ],
  providers: [MessageEventsListener, MessageConsumer, MessageService],
  controllers: [MessageController],
})
export class MessageModule {}
