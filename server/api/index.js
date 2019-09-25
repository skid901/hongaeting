const Router = require('koa-router');
const users = require('./users');

const api = new Router();

api.use('/users', users.routes());

module.exports = api;
