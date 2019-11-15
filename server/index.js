import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import path from 'path';
import serve from 'koa-static';
import send from 'koa-send';
import cors from '@koa/cors';
import mongoose from 'mongoose';
import http from 'http';

import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';
import socketServer from './socket';

import DatingUser from './models/selfDating';
import MeetingUser from './models/selfMeeting';
import daters from './json/datingUsers.json';
import meeters from './json/meetingUsers.json';

import fs from 'fs';
import https from 'https';

require('dotenv').config();
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    
    mongoose.connection.db.dropCollection('datingusers');
    mongoose.connection.db.dropCollection('meetingusers');
    DatingUser.insertMany(daters, function(err,result) {
      if (err) {
        console.error(e);
      };
    });

    MeetingUser.insertMany(meeters, function(err,result) {
      console.log(meeters);
      if (err) {
        console.error(e);
      };
    });
  })
  .catch(e => {
    console.error(e);
  });



const app = new Koa();
const router = new Router();

// cors
 app.use(cors());

// router 설정
router.use('/api', api.routes());

// router 적용 전 bodyParser 적용
app.use(bodyParser());

// 토큰 검증 미들웨어
app.use(jwtMiddleware);

// app 인스턴스에 router 적용
app.use(router.routes()).use(router.allowedMethods());

// build 배포
const root = path.join(__dirname, '..', 'build');
app.use(serve(root));

app.use(async ctx => {
  if (ctx.status === 404) await send(ctx, 'index.html', { root });
});

// http 서버
const httpServer = http.createServer(app.callback());

// socket 서버
socketServer(httpServer, app);

httpServer.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Listening to http://${process.env.SERVER_IP}:${process.env.SERVER_PORT}`,
  );
});

// https 서버
const options = {
  key: fs
    .readFileSync(
      path.resolve(process.cwd(), `certs/${process.env.SSL_KEY}`),
      'utf8',
    )
    .toString(),

  cert: fs
    .readFileSync(
      path.resolve(process.cwd(), `certs/${process.env.SSL_CERT}`),
      'utf8',
    )
    .toString(),
};

const httpsServer = https.createServer(options, app.callback());

httpsServer.listen(process.env.SERVER_PORT_HTTPS, () => {
  console.log(
    `Listening to https://${process.env.SERVER_IP}:${process.env.SERVER_PORT_HTTPS}`,
  );
});
