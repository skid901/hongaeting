import Router from 'koa-router';
import * as controller from './controller';

const datingUser = new Router();

datingUser.get('/', controller.create);

export default datingUser;