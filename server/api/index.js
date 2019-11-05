import Router from 'koa-router';

import auth from './auth';
import datingUser from './datingUsers';
import mettingUser from './meetingUsers';

const api = new Router();

api.use('/auth', auth.routes());
api.use('/datingusers', datingUser.routes());
api.use('/meetingusers', meetingUser.routes());

export default api;
