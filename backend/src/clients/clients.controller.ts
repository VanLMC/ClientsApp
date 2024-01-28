import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from 'src/types/client';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  async index(): Promise<Client[]> {
    return await this.clientsService.getClients();
  }

  @Post()
  async create(@Body() values: Omit<Client, 'id'>): Promise<void> {
    return this.clientsService.create(Object.values(values));
  }

  @Get('route')
  async getRoute(): Promise<Omit<Client, 'id'>[]> {
    return await this.clientsService.getRoute();
  }
}
