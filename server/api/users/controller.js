const nodemailer = require('nodemailer');

// 초기 회원 ID
let userId = 0;

// 임시 회원 DB
const users = [];

/*
 *  회원 가입
 *  POST /api/users
 */
exports.signUp = ctx => {
  const { email, password, gender, certification } = ctx.request.body;
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
 *  PATCH /api/users/:id
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

/*
 *  인증 메일 발송
 *  POST /api/users/mail
 */
const htmlContents = `<div>
  <p>HTML version of the <span style="color:blue;">test</span> message</p><br/>
  <a href="http://localhost:4000">test button</a>
</div>`;

exports.mail = async ctx => {
  const { authEmail } = ctx.request.body;
  console.log({ authEmail });
  // 메일 발송용 인스턴스 생성
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    prot: 587,
    host: 'smtp.gmlail.com',
    secure: false,
    requireTLS: true,
    auth: {
      user: `${process.env.GMAIL_ID}`,
      pass: `${process.env.GMAIL_PASSWORD}`,
    },
  });
  // 메일 작성
  const mail = {
    from: '', // 발송할 이메일
    to: authEmail, // 수신할 이메일
    subject: '테스트 메일 제목', // 메일 제목
    html: htmlContents,
  };
  // 메일 발송
  await transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
  console.log('mailing complete');
  /* eslint-disable */
  ctx.body = { message: 'success' };
};
