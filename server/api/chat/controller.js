import Room from '../../models/room';
import Chat from '../../models/chat';

/*
 *  회원 로그아웃
 *
 */
export const logout = async ctx => {
  ctx.cookies.set(`access_token`);
  ctx.status = 200;
  ctx.body = `{ "message" : "logout" }`;
};

export const logout1 = async ctx => {
  ctx.cookies.set(`access_token`);
  ctx.status = 200;
  ctx.body = `{ "message" : "logout" }`;
};
