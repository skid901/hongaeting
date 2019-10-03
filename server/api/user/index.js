import Router from 'koa-router';
import * as controller from './controller';

const users = new Router();

users.post('/signUp', controller.signUp);
users.post('/signIn', controller.signIn);
users.get('/check', controller.check);
users.post('/logout', controller.logout);

export default users;
