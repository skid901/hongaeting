import Router from 'koa-router';

import user from './user';

const api = new Router();

api.use('/user', user.routes());

export default api;
