import Router from 'koa-router';

import auth from './auth';
import chat from './chat';
import datingUser from './datingUsers';
import meetingUser from './meetingUsers';

const api = new Router();

api.use('/auth', auth.routes());
api.use('/chat', chat.routes());

api.use('/datingusers', datingUser.routes());
api.use('/meetingusers', meetingUser.routes());
export default api;
