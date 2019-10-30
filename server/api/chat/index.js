import Router from 'koa-router';
import * as controller from './controller';

const chat = new Router();

chat.post('/signUp', controller.signUp);

export default chat;
