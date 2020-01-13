import Router from 'koa-router';
import * as controller from './controller';

const auth = new Router();

auth.post('/register', controller.register);
auth.post('/login', controller.login);
auth.get('/check', controller.check);
auth.post('/logout', controller.logout);

export default auth;