import Room from '../../models/room';
import Chat from '../../models/chat';
import User from '../../models/user';

/*
 *  방 만들기
 *
 */
export const makeRoom = async ctx => {
  ctx.cookies.set(`access_token`);
  ctx.status = 200;
  ctx.body = `{ "message" : "logout" }`;
};

export const userList = async ctx => {
  ctx.status = 200;
  const users = User.find({});
  console.log({ users });
  ctx.body = users ? users.toJson() : '';
};
