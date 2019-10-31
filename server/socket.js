/* eslint-disable no-param-reassign */
import socketIO from 'socket.io';

import User from './models/user';
import Room from './models/room';
import Chat from './models/chat';

function socketServer(httpServer, app) {
  //
  const io = socketIO(httpServer, {
    path: '/socket.io',
    // pingTimeout: 1000 * 10,
  });

  // namespace /chat에 접속
  const chatRoom = io.of('/chat').on('connection', socket => {
    socket.on('log', async ({ roomId, email }) => {
      // room에 join
      socket.join(roomId);
      const room = await Room.findByRoomId(roomId);
      const chatLogList = await Chat.findChatLogList(room);
      // 이전 메시지 기록을 전송
      socket.emit('log', { chatLogList });
    });

    socket.on('chat', async ({ roomId, email, msg }) => {
      const user = await User.findByEmail(email);
      const room = await Room.findByRoomId(roomId);
      const chat = new Chat({ room, user, chat: msg });
      await chat.save();
      // room에 join되어 있는 클라이언트에게 메시지를 전송
      chatRoom
        .to(roomId)
        .emit('chat', { chatLog: { nickName: user.nickName, msg } });
    });
  });
}

export default socketServer;
