import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Client } from 'src/types/client';

@Injectable()
export class ClientsService {
  constructor(private readonly databaseService: DatabaseService) {}
  private readonly logger = new Logger(DatabaseService.name);

  async getClients(): Promise<Client[]> {
    try {
      const clients = (
        await this.databaseService.query(
          `SELECT
            ID,
            NAME,
            EMAIL,
            PHONE,
            COORDINATE_X,
            COORDINATE_Y
        FROM CLIENTS`,
        )
      ).rows;
      return clients;
    } catch (error) {
      this.logger.error(error.message, error.stack);
      throw error;
    }
  }

  async create(values: Array<string | number>): Promise<void> {
    const inserQuery = `INSERT INTO clients (name, email, phone, coordinate_x, coordinate_y) VALUES ($1, $2, $3, $4, $5)`;
    try {
      await this.databaseService.query(inserQuery, values);
    } catch (error) {
      this.logger.error(error.message, error.stack);
      throw error;
    }
  }

  async getRoute(): Promise<Client[]> {
    try {
      const clients = (
        await this.databaseService.query(
          `SELECT
            ID,
            NAME,
            EMAIL,
            PHONE,
            COORDINATE_X,
            COORDINATE_Y
        FROM CLIENTS`,
        )
      ).rows;

      const COMPANY_X_POSITION = 0;
      const COMPANY_Y_POSITION = 0;

      const clientsWithDistance: Array<Client> = [];

      clients.forEach((client: Client) => {
        const distance = this.getDistance(
          COMPANY_X_POSITION,
          COMPANY_Y_POSITION,
          client.coordinate_x,
          client.coordinate_y,
        );
        clientsWithDistance.push({ ...client, distance });
      });

      const clientsOrderedByShorterDistance = clientsWithDistance.sort(
        (a, b) => a.distance - b.distance,
      );

      return clientsOrderedByShorterDistance;
    } catch (error) {
      this.logger.error(error.message, error.stack);
      throw error;
    }
  }

  getDistance(x1, y1, x2, y2): number {
    return Math.hypot(x1 - x2, y1 - y2);
  }
}
