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
    socket.on('log', async ({ roomId }) => {
      try {
        // room에 join
        socket.join(roomId);
        const room = await Room.findByRoomId(roomId);
        const chatLogList = await Chat.findChatLogList(room);
        console.log({ chatLogList });
        // 이전 메시지 기록을 전송
        socket.emit('log', { chatLogList });
      } catch (e) {
        console.log({ e });
        throw e;
      }
    });

    socket.on('chat', async ({ roomId, email, msg }) => {
      try {
        const user = await User.findByEmail(email);
        const room = await Room.findByRoomId(roomId);
        const count = await Chat.findChatCount(room);
        const chatNum = `${count + 1}`.padStart(6, '0');
        const chat = new Chat({ room, chatNum, user, chat: msg });
        await chat.save();
        // room에 join되어 있는 클라이언트에게 메시지를 전송
        // const chatLog = chat.toJSON();
        // chatLog.user = user.serialize();
        const chatLog = await Chat.findChatLog(room, chatNum);
        console.log({ chatLog });
        chatRoom.to(roomId).emit('chat', { chatLog });
      } catch (e) {
        console.log({ e });
        throw e;
      }
    });
  });
}

export default socketServer;
