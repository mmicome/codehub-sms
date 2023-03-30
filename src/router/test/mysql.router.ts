import router from '@router/index';
import { DefaultContext } from 'koa';
import db from '@database/index';
import { User } from '@model/mysql/User.entity';

router.get('/user/mysql/save', async (ctx: DefaultContext) => {
  const user = new User();
  user.id = Math.random() + '';
  user.name = 'hello';
  user.sex = '0';
  db.mysql.manager.save(user);
  ctx.body = 'OK';
});
router.get('/user/mysql/all', async (ctx: DefaultContext) => {
  const users = await db.mysql.manager.find(User);
  ctx.body = users;
});

router.get('/user/mysql/:name', async (ctx: DefaultContext) => {
  const users = await db.mysql.getRepository(User).findBy({ name: ctx.params.name });
  ctx.body = users;
});
