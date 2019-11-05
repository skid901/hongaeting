import Router from 'koa-router';
import * as controller from './controller';

const datingUser = new Router();

datingUser.post('/', controller.create);
datingUser.get('/:pageNumber', controller.list);
datingUser.get('/', controller.all);
//datingUser.get('/:id', controller.selected);

export default datingUser;