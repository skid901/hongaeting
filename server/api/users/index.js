const Router = require('koa-router');
const controller = require('./controller');

const users = new Router();

users.get('/', controller.list);
users.post('/', controller.signUp);
users.get('/:id', controller.signIn);
users.delete('/:id', controller.remove);
users.put('/:id', controller.replace);
users.patch('/:id', controller.update);

users.post('/mail', controller.mail);

module.exports = users;
