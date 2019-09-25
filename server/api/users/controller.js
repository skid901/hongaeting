// 초기 회원 ID
let userId = 0;

// 임시 회원 DB
const users = [];

/*
 *  회원 가입
 *  POST /api/users
 */
exports.signUp = ctx => {
  const { id, password, gender, email, certification } = ctx.request.body;
  userId += 1;
  const user = { id: userId, password, gender, email, certification };
  users.push(user);
  ctx.body = user;
};

/*
 *  회원 목록 조회
 *  GET /api/users
 */
exports.list = ctx => {
  ctx.body = users;
};

/*
 *  회원 로그인
 *  GET /api/users/:id
 */
exports.signIn = ctx => {
  const { id } = ctx.params;
  const user = users.find(u => u.id.toString() === id);
  if (!user) {
    ctx.status = 404;
    ctx.body = {
      message: '회원이 존재하지 않습니다.',
    };
    return;
  }
  ctx.body = user;
};

/*
 *  회원 탈퇴
 *  DELETE /api/users/:id
 */
exports.remove = ctx => {
  const { id } = ctx.params;
  const index = users.findIndex(u => u.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '회원이 존재하지 않습니다.',
    };
    return;
  }
  users.splice(index, 1);
  ctx.status = 204; // No Content
};

/*
 *  회원 수정(교체)
 *  PUT /api/users/:id
 */
exports.replace = ctx => {
  const { id } = ctx.params;
  const index = users.findIndex(u => u.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '회원이 존재하지 않습니다.',
    };
    return;
  }
  users[index] = { id, ...ctx.request.body };
  ctx.body = users[id];
};

/*
 *  회원 수정(변경)
 *  PUT /api/users/:id
 */
exports.update = ctx => {
  const { id } = ctx.params;
  const index = users.findIndex(u => u.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '회원이 존재하지 않습니다.',
    };
    return;
  }
  users[index] = { ...users[id], ...ctx.request.body };
  ctx.body = users[id];
};
