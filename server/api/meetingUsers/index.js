import Router from 'koa-router';
import * as controller from './controller';

const meetingUser = new Router();

meetingUser.post('/', controller.create);
meetingUser.get('/pageNumber/:pageNumber/gender/:gender', controller.list);
meetingUser.get('/gender/:gender', controller.count);
//meetingUser.get('/:id', controller.selected);

export default meetingUser;