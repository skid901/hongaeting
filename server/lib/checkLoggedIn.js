/* eslint-disable consistent-return */
const checkedLoggedIn = (ctx, next) => {
  if (!ctx.state.user) {
    // 로그인 중 아님
    ctx.status = 200;
    ctx.body = `{ "message" : "noSignIn" }`;
    return;
  }
  return next();
};

export default checkedLoggedIn;
