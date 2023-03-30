export interface IConfig {
  port: number;
}

export const config: IConfig = {
  port: parseInt(process.env.NODE_PORT, 10) || 3007,
};

export { db as mysql } from './data-source-mysql';

export { db as mongodb } from './data-source-mongodb';
