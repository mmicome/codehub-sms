import { DataSource } from 'typeorm';
import path from 'path';

const entities = path.resolve(__dirname, '../model/mysql/*.entity.{ts,js}');

export const db = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '8376667249',
  database: 'test',
  synchronize: true,
  logging: ['error'], //"query",
  entities: [entities],
  subscribers: [],
  migrations: [],
});
