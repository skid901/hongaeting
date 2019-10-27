/* eslint-disable no-param-reassign */
import socketIO from 'socket.io';

function socketServer(httpServer) {
  //
  const io = socketIO(httpServer, {
    path: '/socket.io',
    // pingTimeout: 1000 * 10,
  });

  io.on('connection', socket => {
    const req = socket.request;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('새로운 클라이언트 접속', ip, socket.id, req.ip);

    // force client disconnect from server
    socket.on('forceDisconnect', () => {
      socket.disconnect();
    });

    // discinnect
    socket.on('disconnect', () => {
      console.log(`user disconnected: ${socket.name}`);
    });

    // test
    socket.interval = setInterval(() => {
      socket.emit('test', `test ${socket.id}`);
    }, 3000);

    // 접속한 클라이언트의 정보가 수신되면
    socket.on('login', data => {
      console.log(
        `Client logged-in:\n name:${data.name}\n userid: ${data.userid}`,
      );

      // socket에 클라이언트 정보를 저장한다
      socket.name = data.name;
      socket.userid = data.userid;

      // 접속된 모든 클라이언트에게 메시지를 전송한다
      // io.emit('login', data.name);
      io.emit('login', socket.id);
    });

    // 클라이언트로부터의 메시지 수신
    socket.on('chat', data => {
      console.log('Message from %s: %s', socket.name, data.msg);

      const msg = {
        from: {
          name: socket.name,
          userid: socket.userid,
        },
        msg: data.msg,
      };

      // 접속된 모든 클라이언트에게 메시지를 전송
      io.emit('s2c chat', { name: data.name, msg: data.msg });

      // 메시지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메시지를 전송
      // socket.broadcast.emit('s2c chat', msg);

      // 메시지를 전송한 클라이언트에게만 메시지를 전송
      // socket.emit('s2c chat', msg);

      // 특정 클라이언트에게만 메시지를 전송
      // io.to(id).emit('s2c chat', data);
    });
  });
}

export default socketServer;
