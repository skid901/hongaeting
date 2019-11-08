import Router from 'koa-router';
import * as controller from './controller';

const datingUser = new Router();

datingUser.post('/', controller.create);
datingUser.get('/pageNumber/:pageNumber/gender/:gender', controller.list);
datingUser.get('/gender/:gender', controller.count);
//datingUser.get('/:id', controller.selected);

export default datingUser;