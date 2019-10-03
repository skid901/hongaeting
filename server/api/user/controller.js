import nodemailer from 'nodemailer';

import User from '../../models/user';

/*
 *  인증 메일 발송
 *
 */
const mail = (authEmail, hashedAuthEmail) => {
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
  // 메일 내용
  const htmlContents = `<div>
  <p><span style="color:blue;">홍개팅</span> 계정 인증용 메일입니다.</p><br/>
  <div style="background-color: #0045ce;">html css test</div>
  <a target="_blank" rel="noopener noreferrer" href="${process.env.REACT_APP_DOMAIN}/signup/auth/${hashedAuthEmail}">홍개팅 계정 인증하기</a>
</div>`;
  // 메일 작성
  const mailConfig = {
    from: '', // 발송할 이메일
    to: `${authEmail}@mail.hongik.ac.kr`, // 수신할 이메일
    subject: '홍개팅 인증 메일 테스트', // 메일 제목
    html: htmlContents,
  };
  // 메일 발송
  transporter.sendMail(mailConfig, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
  console.log('mailing complete');
};

/*
 *  회원 가입
 *  POST /api/users
 */
export const signUp = async ctx => {
  const { email, password, nickName, sex, authEmail } = ctx.request.body;
  try {
    let exists;
    exists = await User.findByEmail(email);
    if (exists) {
      ctx.status = 409;
      ctx.body = `{ "message" : "이메일 중복"}`;
      return;
    }
    exists = await User.findByNickName(nickName);
    if (exists) {
      ctx.status = 409;
      ctx.body = `{ "message" : "닉네임 중복"}`;
      return;
    }
    exists = await User.findByAuthEmail(authEmail);
    if (exists) {
      ctx.status = 409;
      ctx.body = `{ "message" : "홍대 이메일 중복"}`;
      return;
    }
    const user = new User({ email, nickName, sex, authEmail });
    await user.setPassword(password);
    await user.setHashedAuthEmail(authEmail);
    await user.save();
    mail(authEmail, user.toJSON().hashedAuthEmail);
    ctx.body = user.serialize();
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
 *  회원 로그인
 *  GET /api/users/:id
 */
export const signIn = async ctx => {
  const { email, password } = ctx.request.body;
  if (!email || !password) {
    ctx.status = 401;
    return;
  }
  try {
    const user = await User.findByEmail(email);
    if (!user) {
      ctx.status = 401;
      ctx.body = `{ "message" : "이메일 없음"}`;
      return;
    }
    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 401;
      ctx.body = `{ "message" : "비밀번호 비일치"}`;
      return;
    }
    const isAuthed = await user.checkIsAuthed(email);
    if (!isAuthed) {
      ctx.status = 401;
      ctx.body = `{ "message" : "학교 미인증"}`;
      return;
    }
    ctx.body = user.serialize();
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
 *  회원 로그인 체크
 *
 */
export const check = ctx => {};

/*
 *  회원 로그아웃
 *
 */
export const logout = ctx => {};
