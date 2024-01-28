import { Injectable, Logger } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';

@Injectable()
export class DatabaseService {
  private readonly logger = new Logger(DatabaseService.name);
  private readonly pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'postgres',
      password: '12345',
      port: 5432,
    });
  }

  async query(sql: string, values?: any[]): Promise<QueryResult<any>> {
    try {
      const result = await this.pool.query(sql, values);
      return result;
    } catch (error) {
      this.logger.error(error.message, error.stack);
      throw error;
    }
  }
}
