import SubscribeUser from '../../models/subscribeUser';

export const subscribe = async (ctx) => {
  const {phone} = ctx.request.body;

  console.log("phone :", phone);
  const subscribeUser = new SubscribeUser({phone});

  try{
    await subscribeUser.save();
    await console.log("subscribe well")
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = subscribeUser;
}