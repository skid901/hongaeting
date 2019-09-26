const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const path = require('path');
const serve = require('koa-static');
const send = require('koa-send');

const api = require('./api');

const app = new Koa();
const router = new Router();

// router 설정
router.use('/api', api.routes());

// router 적용 전 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 router 적용
app.use(router.routes()).use(router.allowedMethods());

// build 배포
const root = path.join(__dirname, '..', 'build');
app.use(serve(root));
app.use(async ctx => {
  if (ctx.status === 404) await send(ctx, 'index.html', { root });
});

app.listen(4000, () => {
  console.log('Listening to http://localhost:4000');
});
