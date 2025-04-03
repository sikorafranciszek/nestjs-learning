import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('message')
export class MessageConsumer extends WorkerHost {
  async process(job: Job<{ message: string }, { message: string }, string>) {
    console.log(job.data);

    if (job.id === '26') {
      throw new Error('Testowy błąd tylko dla joba o id: 26');
    }

    return {
      message: 'Message received',
    };
  }
}
