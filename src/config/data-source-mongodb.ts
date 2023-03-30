import { DataSource } from 'typeorm';
import path from 'path';
const entities = path.resolve(__dirname, '../model/mongodb/*.entity.{ts,js}');

export const db = new DataSource({
  type: 'mongodb',
  host: '127.0.0.1',
  port: 27017,
  username: '',
  password: '',
  useUnifiedTopology: true,
  database: 'test',
  logging: ['error'], //"query",
  entities: [entities],
});
