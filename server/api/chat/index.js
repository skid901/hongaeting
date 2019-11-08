import Router from 'koa-router';
import * as controller from './controller';

const chat = new Router();

chat.post('/userList', controller.userList);
chat.post('/makeRoom', controller.makeRoom);
// chat.post('/checkUser', controller.checkUser);

export default chat;
