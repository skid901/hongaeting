import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import path from 'path';
import serve from 'koa-static';
import send from 'koa-send';
import cors from '@koa/cors';
import mongoose from 'mongoose';

import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';

require('dotenv').config();
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(e => {
    console.error(e);
  });
const app = new Koa();
const router = new Router();

// cors
//app.use(cors());
app.use(bodyParser());
// router 설정
router.use('/api', api.routes());

// router 적용 전 bodyParser 적용


app.use(jwtMiddleware);

// app 인스턴스에 router 적용
app.use(router.routes()).use(router.allowedMethods());

// build 배포
const root = path.join(__dirname, '..', 'build');
app.use(serve(root));
app.use(async ctx => {
  if (ctx.status === 404) await send(ctx, 'index.html', { root });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Listening to http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
  );
});
