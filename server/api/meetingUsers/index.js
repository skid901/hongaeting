import Router from 'koa-router';
import * as controller from './controller';

const meetingUser = new Router();

meetingUser.post('/', controller.create);
meetingUser.get('/:pageNumber', controller.list);
meetingUser.get('/', controller.all);

export default meetingUser;