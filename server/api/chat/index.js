import Router from 'koa-router';
import * as controller from './controller';

const chat = new Router();

chat.post('/makeRoom', controller.makeRoom);
chat.post('/userList', controller.userList);

export default chat;
