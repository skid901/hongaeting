import Router from 'koa-router';

import auth from './auth';
import chat from './chat';

const api = new Router();

api.use('/auth', auth.routes());
api.use('/chat', chat.routes());

export default api;
