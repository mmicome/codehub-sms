import router from '@router/index';
import { DefaultContext } from 'koa';
import db from '@database/index';
import { User } from '@model/mongodb/User.entity';

router.get('/user/mongodb/save', async (ctx: DefaultContext) => {
  const user = new User();
  user.name = 'hello';
  user.sex = '0';
  db.mongodb.getRepository(User).save(user);
  ctx.body = 'OK';
});

router.get('/user/mongodb/all', async (ctx: DefaultContext) => {
  const users = await db.mongodb.getRepository(User).find();
  ctx.body = users;
});
