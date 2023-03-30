import { load } from '@utils/auto-load'
import Router from '@koa/router';
const router = new Router({prefix: '/common'});
// router
// .use(session())
// .use(authorize());
export default router;

load('**/*.router.{ts,js}')