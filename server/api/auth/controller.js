import nodemailer from 'nodemailer';

import User from '../../models/user';

/*
 *  인증 메일 발송
 *
 */
const mail = async (authEmail, hashedAuthEmail) => {
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
  await transporter.sendMail(mailConfig, (error, info) => {
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
 *
 */
export const signUp = async ctx => {
  const { email, password, nickName, sex, authEmail } = ctx.request.body;
  try {
    let exists;
    exists = await User.findByEmail(email);
    if (exists) {
      ctx.status = 200;
      ctx.body = `{ "message" : "emailReduplication"}`;
      return;
    }
    exists = await User.findByNickName(nickName);
    if (exists) {
      ctx.status = 200;
      ctx.body = `{ "message" : "nickNameReduplication"}`;
      return;
    }
    exists = await User.findByAuthEmail(authEmail);
    if (exists) {
      ctx.status = 200;
      ctx.body = `{ "message" : "authEamilReduplication"}`;
      return;
    }
    const user = new User({ email, nickName, sex, authEmail });
    await user.setPassword(password);
    await user.setHashedAuthEmail(authEmail);
    await user.save();
    // 인증 메일 발송
    await mail(authEmail, user.toJSON().hashedAuthEmail);
    ctx.body = `{ "message" : "signUpSuccess"}`;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
 *  회원 메일 인증
 *
 */
export const authMail = async ctx => {
  const { hashedAuthEmail } = ctx.request.body;
  try {
    let user;
    user = await User.findByHashedAuthEmail(hashedAuthEmail);
    if (!user) {
      ctx.status = 200;
      ctx.body = `{ "message" : "noAuthEmail"}`;
      return;
    }
    const { authEmail } = await user.serialize();
    const isAuthed = await user.checkIsAuthed();
    if (isAuthed) {
      ctx.status = 200;
      ctx.body = `{ "message" : "alreadyAuthed"}`;
      return;
    }
    await User.permit(authEmail);
    user = await User.findByAuthEmail(authEmail);
    ctx.body = user.serialize();
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
 *  회원 로그인
 *
 */
export const signIn = async ctx => {
  const { email, password } = ctx.request.body;
  if (!email || !password) {
    ctx.status = 200;
    ctx.body = `{ "message" : "noParams"}`;
    return;
  }
  try {
    const user = await User.findByEmail(email);
    if (!user) {
      ctx.status = 200;
      ctx.body = `{ "message" : "noEmail"}`;
      return;
    }
    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 200;
      ctx.body = `{ "message" : "invalidPassword"}`;
      return;
    }
    const isAuthed = await user.checkIsAuthed();
    if (!isAuthed) {
      ctx.status = 200;
      ctx.body = `{ "message" : "noAuth"}`;
      return;
    }
    ctx.body = user.serialize();
    // 토큰 발행
    const token = user.generateToken();
    ctx.cookies.set(`access_token`, token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
 *  회원 로그인 체크
 *
 */
export const check = async ctx => {
  const { user } = ctx.state;
  if (!user) {
    // 로그인 중 아님
    ctx.status = 200;
    ctx.body = `{ "message" : "noSignIn" }`;
    return;
  }
  ctx.body = user;
};

/*
 *  회원 로그아웃
 *
 */
export const logout = async ctx => {
  ctx.cookies.set(`access_token`);
  ctx.status = 200;
  ctx.body = `{ "message" : "logout" }`;
};
