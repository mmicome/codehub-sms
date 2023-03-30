import router from '@router/index'
import {DefaultContext} from 'koa'

/**
 * Base route, return a 401
 */
router.get('/', async (ctx:DefaultContext) => ctx.status = 401);

/**
 * Basic healthcheck
 */
router.get('/healthcheck', async (ctx:DefaultContext) => ctx.body = 'OK');
