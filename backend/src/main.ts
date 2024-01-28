import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseService } from './database/database.service';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const databaseService = app.get(DatabaseService);

  const tablesExist = (
    await databaseService.query(
      `SELECT EXISTS (
      SELECT 1
      FROM   information_schema.tables
      WHERE  table_schema = 'public'
      AND    table_name = 'clients'
    );`,
    )
  ).rows[0].exists;

  if (!tablesExist) {
    const tablesScriptPath = path.join('src', 'ddl', 'create-tables.sql');
    const seedScriptPath = path.join('src', 'ddl', 'seed-tables.sql');

    const createTablesScript = fs.readFileSync(tablesScriptPath, 'utf-8');
    const seedTablesScript = fs.readFileSync(seedScriptPath, 'utf-8');

    try {
      await databaseService.query(createTablesScript);
      await databaseService.query(seedTablesScript);
    } catch (error) {
      console.log(error);
    }
  }

  await app.listen(3000);
}
bootstrap();
