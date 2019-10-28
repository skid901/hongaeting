import Router from 'koa-router';

import auth from './auth';
import datingUser from './datingUsers';

const api = new Router();

api.use('/auth', auth.routes());
api.use('/datingusers', datingUser.routes());

export default api;
