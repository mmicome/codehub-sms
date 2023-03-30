require("reflect-metadata")

import Koa from 'koa';
import koaBody from 'koa-bodyparser';
import cors from '@koa/cors';
import serve from 'koa-static'
import koaBunyanLogger from 'koa-bunyan-logger'

import { config } from './config';
import router from './router';
import { logger } from './logs';

const app = new Koa();

app.use(koaBody());
app.use(cors());
app.use(koaBunyanLogger(logger));
app.use(koaBunyanLogger.requestLogger());
app.use(koaBunyanLogger.timeContext());
app.use(router.routes()).use(router.allowedMethods());
app.use(serve(__dirname + '/public', {
  index: false,    // 默认为true  访问的文件为index.html  可以修改为别的文件名或者false
  hidden: false,   // 是否同意传输隐藏文件
  defer: true      // 如果为true，则在返回next()之后进行服务，从而允许后续中间件先进行响应
}))

export const server = app.listen(config.port);
console.log(`Server running on http://localhost:${config.port}`);
