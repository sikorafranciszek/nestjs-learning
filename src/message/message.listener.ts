import {
  OnQueueEvent,
  QueueEventsHost,
  QueueEventsListener,
} from '@nestjs/bullmq';

@QueueEventsListener('message')
export class MessageEventsListener extends QueueEventsHost {
  @OnQueueEvent('active')
  onActive(job: { jobId: string; prev?: string }) {
    console.log(`Job ${job.jobId} is active`);
  }

  @OnQueueEvent('completed')
  onCompleted(job: { jobId: string; prev?: string }) {
    console.log(`Job ${job.jobId} is completed`);
  }

  @OnQueueEvent('failed')
  onFailed(job: { jobId: string; prev?: string }) {
    console.log(`Job ${job.jobId} is failed`);
  }

  @OnQueueEvent('progress')
  onProgress(job: { jobId: string; prev?: string; progress: number }) {
    console.log(`Job ${job.jobId} is progressing`);
  }

  @OnQueueEvent('waiting')
  onWaiting(job: { jobId: string; prev?: string }) {
    console.log(`Job ${job.jobId} is waiting`);
  }

  @OnQueueEvent('delayed')
  onDelayed(job: { jobId: string; prev?: string }) {
    console.log(`Job ${job.jobId} is delayed`);
  }
}
