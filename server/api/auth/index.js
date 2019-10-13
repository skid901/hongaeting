import Router from 'koa-router';
import * as controller from './controller';

const auth = new Router();

auth.post('/signUp', controller.signUp);
auth.post('/authEmail', controller.authMail);
auth.post('/signIn', controller.signIn);
auth.get('/check', controller.check);
auth.post('/logout', controller.logout);

export default auth;
