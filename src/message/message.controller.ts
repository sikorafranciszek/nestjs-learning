import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { MessageService } from './message.service';
import type { Message, Prisma } from '@prisma/client';
import { GetMessagesDto } from './dto/get-messages.dto';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  async getPaginatedAllMessages(@Query() query: GetMessagesDto): Promise<{
    data: Message[];
    meta: {
      totalPages: number;
      currentPage: number;
      limitPerPage: number;
      sort: 'asc' | 'desc';
      totalItems: number;
    };
  }> {
    const { page, limit, sort } = query;

    const paginationParams = {
      skip: (page! - 1) * limit!,
      take: limit!,
      orderBy: {
        createdAt: sort === 'asc' ? 'asc' : ('desc' as Prisma.SortOrder),
      },
    };

    const [messages, totalItems] = await Promise.all([
      this.messageService.getMessages(paginationParams),
      this.messageService.getAllMessagesCount(),
    ]);

    const totalPages = Math.ceil(totalItems / limit!);

    return {
      data: messages,
      meta: {
        totalPages,
        currentPage: page!,
        limitPerPage: limit!,
        sort: sort!,
        totalItems,
      },
    };
  }

  @Post()
  async createMessage(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.createMessage({
      message: createMessageDto.message,
    });
  }
}
