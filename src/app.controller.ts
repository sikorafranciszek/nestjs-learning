import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectQueue } from '@nestjs/bullmq';
import { Job, Queue } from 'bullmq';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // @InjectQueue('message') private messageQueue: Queue,
  ) {}

  // @Post('send')
  // async sendMessage(
  //   @Body() messageDto: { message: string },
  // ): Promise<{ status: string; message: string; jobId: string | undefined }> {
  //   const job = await this.messageQueue.add('message', {
  //     message: messageDto.message,
  //   });

  //   console.log(job.id);
  //   return {
  //     status: 'Message sent',
  //     message: messageDto.message,
  //     jobId: job.id,
  //   };
  // }

  // @Get('job/:id')
  // async getJob(
  //   @Param('id') id: string,
  // ): Promise<{ status: string; message: string; jobId: string | undefined }> {
  //   const job = await this.messageQueue.getJob(id);
  //   return {
  //     status: 'Job retrieved',
  //     message: job.data.message,
  //     jobId: job.id,
  //   };
  // }

  // @Get('jobs/completed')
  // async getCompletedJobs(): Promise<{ status: string; jobs: any[] }> {
  //   const jobs = await this.messageQueue.getCompleted();
  //   const jobsData = jobs.map((job) => ({
  //     id: job.id,
  //     message: job.data.message,
  //     returnvalue: job.returnvalue,
  //   }));
  //   return { status: 'Completed jobs retrieved', jobs: jobsData };
  // }

  // @Get('jobs')
  // async getAllJobs(): Promise<{ status: string; jobs: any[] }> {
  //   const jobs = await this.messageQueue.getJobs();
  //   const jobsData = await Promise.all(
  //     jobs.map(async (job: Job) => ({
  //       id: job.id,
  //       message: job.data.message,
  //       returnvalue: job.returnvalue,
  //       status: await job.getState(),
  //     })),
  //   );
  //   return { status: 'All jobs retrieved', jobs: jobsData };
  // }

  // @Get('jobs/failed')
  // async getFailedJobs(): Promise<{ status: string; jobs: any[] }> {
  //   const jobs = await this.messageQueue.getFailed();
  //   const jobsData = jobs.map((job) => ({
  //     id: job.id,
  //     message: job.data.message,
  //     failedReason: job.failedReason,
  //   }));
  //   return { status: 'Failed jobs retrieved', jobs: jobsData };
  // }

  // @Delete('jobs/all')
  // async deleteAllJobs(): Promise<{ status: string }> {
  //   await this.messageQueue.clean(0, 0, 'completed');
  //   return { status: 'All jobs deleted' };
  // }

  // // create a retry job
  // @Post('retry')
  // async retryJob(): Promise<{ workers: number }> {
  //   const workersCount = await this.messageQueue.getWorkersCount();

  //   return { workers: workersCount };
  // }
}
