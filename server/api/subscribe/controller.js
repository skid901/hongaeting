import SubscribeUser from '../../models/subscribeUser';

export const subscribe = async (ctx) => {
  const {phone, PhoneNumber} = ctx.request.body;
  console.log(PhoneNumber);
  console.log("phone :", phone);
  const subscribeUser = new SubscribeUser({PhoneNumber});

  try{
    await subscribeUser.save();
    await console.log("subscribe well")
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = subscribeUser;
}