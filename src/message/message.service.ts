import { Injectable } from '@nestjs/common';
import type { Message, Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class MessageService {
  constructor(private prisma: DatabaseService) {}

  /**
   * Pobiera wszystkie wiadomości z bazy danych
   * @returns {Promise<Message[]>} Tablica wszystkich wiadomości
   */
  async getAllMessages(): Promise<Message[]> {
    return this.prisma.message.findMany();
  }

  /**
   * Pobiera wiadomości z bazy danych z możliwością filtrowania, sortowania i paginacji
   * @param {Object} params - Parametry zapytania
   * @param {number} [params.skip] - Liczba wiadomości do pominięcia (paginacja)
   * @param {number} [params.take] - Maksymalna liczba wiadomości do pobrania
   * @param {Prisma.MessageWhereUniqueInput} [params.cursor] - Kursor do paginacji
   * @param {Prisma.MessageWhereInput} [params.where] - Warunki filtrowania
   * @param {Prisma.MessageOrderByWithRelationInput} [params.orderBy] - Kryteria sortowania
   * @returns {Promise<Message[]>} Tablica wiadomości spełniających kryteria
   */
  async getMessages(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MessageWhereUniqueInput;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput;
  }): Promise<Message[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.message.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  /**
   * Pobiera pojedynczą wiadomość na podstawie unikalnych kryteriów
   * @param {Prisma.MessageWhereUniqueInput} messageWhereUniqueInput - Unikalne kryteria wyszukiwania
   * @returns {Promise<Message | null>} Znaleziona wiadomość lub null, jeśli nie znaleziono
   */
  async getUniqueMessage(
    messageWhereUniqueInput: Prisma.MessageWhereUniqueInput,
  ): Promise<Message | null> {
    return this.prisma.message.findUnique({
      where: messageWhereUniqueInput,
    });
  }

  /**
   * Tworzy nową wiadomość w bazie danych
   * @param {Prisma.MessageCreateInput} data - Dane nowej wiadomości
   * @returns {Promise<Message>} Utworzona wiadomość
   */
  async createMessage(data: Prisma.MessageCreateInput): Promise<Message> {
    return this.prisma.message.create({ data });
  }

  /**
   * Tworzy wiele wiadomości w bazie danych w jednej operacji
   * @param {Prisma.MessageCreateManyInput[]} data - Tablica danych nowych wiadomości
   * @returns {Promise<Prisma.BatchPayload>} Informacje o wynikach operacji zbiorczej
   */
  async createManyMessages(
    data: Prisma.MessageCreateManyInput[],
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.message.createMany({ data });
  }

  /**
   * Aktualizuje istniejącą wiadomość
   * @param {Object} params - Parametry aktualizacji
   * @param {Prisma.MessageWhereUniqueInput} params.where - Kryteria identyfikujące wiadomość do aktualizacji
   * @param {Prisma.MessageUpdateInput} params.data - Nowe dane wiadomości
   * @returns {Promise<Message>} Zaktualizowana wiadomość
   */
  async updateMessage(params: {
    where: Prisma.MessageWhereUniqueInput;
    data: Prisma.MessageUpdateInput;
  }): Promise<Message> {
    const { where, data } = params;
    return this.prisma.message.update({
      where,
      data,
    });
  }

  /**
   * Usuwa wiadomość z bazy danych
   * @param {Prisma.MessageWhereUniqueInput} where - Kryteria identyfikujące wiadomość do usunięcia
   * @returns {Promise<Message>} Usunięta wiadomość
   */
  async deleteMessage(where: Prisma.MessageWhereUniqueInput): Promise<Message> {
    return this.prisma.message.delete({
      where,
    });
  }

  /**
   * Pobiera liczbę wszystkich wiadomości w bazie danych
   * @returns {Promise<number>} Liczba wszystkich wiadomości
   */
  async getAllMessagesCount(): Promise<number> {
    return this.prisma.message.count();
  }

  /**
   * Pobiera liczbę wiadomości spełniających określone kryteria
   * @param {Prisma.MessageWhereInput} where - Kryteria filtrowania
   * @returns {Promise<number>} Liczba wiadomości spełniających kryteria
   */
  async getMessagesCount(where?: Prisma.MessageWhereInput): Promise<number> {
    return this.prisma.message.count({ where });
  }
}
