import Room from '../../models/room';
import Chat from '../../models/chat';
import User from '../../models/user';

/*
 *  임시 유저 리스트
 *
 */
export const userList = async ctx => {
  ctx.status = 200;
  const users = await User.findAllUsers();
  ctx.body = JSON.stringify(users);
};

/*
 *  방 만들기
 *
 */
export const makeRoom = async ctx => {
  const { roomType, entryEmail } = ctx.request.body;
  const { user } = ctx.state;
  try {
    const host = await User.findById(user._id);
    if (!host) {
      ctx.status = 200;
      ctx.body = `{ "message" : "noHost"}`;
      return;
    }
    const entry = await User.findByEmail(entryEmail);
    if (!entry) {
      ctx.status = 200;
      ctx.body = `{ "message" : "noEntry"}`;
      return;
    }
    if (host.email === entry.email) {
      ctx.status = 200;
      ctx.body = `{ "message" : "hostEntrySame"}`;
      return;
    }
    const roomList = await Room.findByTypeAndEntry(roomType, host, entry);
    if (roomList.length !== 0) {
      ctx.status = 200;
      ctx.body = `{ "message" : "alreadyExist", "roomId" : "${roomList[0].roomId}" }`;
      return;
    }
    const count = await Room.findRoomCount();
    const roomId = `${count + 1}`.padStart(6, '0');
    const room = new Room({ roomId, roomType, host, entry: [host, entry] });
    await room.save();
    ctx.status = 200;
    ctx.body = `{ "message" : "roomMakeSuccess", "roomId" : "${roomId}" }`;
  } catch (e) {
    ctx.throw(500, e);
  }
};
