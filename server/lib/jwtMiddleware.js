import jwt from 'jsonwebtoken';
import User from '../models/user';

const jwtMiddleware = async (ctx, next) => {
  const token = ctx.cookies.get(`access_token`);
  if (!token) return next(); // 토큰 없음
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    ctx.state.user = {
      _id: decode._id,
      email: decode.email,
      nickName: decode.nickName,
      sex: decode.sex,
      authEmail: decode.authEmail,
    };
    // 토큰 유효기간 3.5일 미만일 시 재발급
    const now = Math.floor(Date.now() / 1000);
    if (decode.exp - now < 60 * 60 * 24 * 3.5) {
      const user = await User.findById(decode._id);
      const resetToken = user.generateToken();
      ctx.cookies.set(`access_token`, resetToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        httpOnly: true,
      });
    }
    return next();
  } catch (e) {
    // 토큰 검증 실패
    return next();
  }
};

export default jwtMiddleware;
