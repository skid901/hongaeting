const Router = require('koa-router');

const users = new Router();

users.get('/', ctx => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
  };
});

module.exports = users;
