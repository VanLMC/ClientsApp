import { Module } from '@nestjs/common';
import { ClientsController } from './clients/clients.controller';
import { DatabaseService } from './database/database.service';
import { ClientsService } from './clients/clients.service';

@Module({
  imports: [],
  controllers: [ClientsController],
  providers: [DatabaseService, ClientsService],
})
export class AppModule {}
