import DatingUser from '../../models/selfDating';
/*
export const create = async (ctx) => {
  const {
    id,
    time,
    age,
    collage,
    kakaoid,
    religion,
    appearance,
    personality,
    hobby,
    idealtype
  } = ctx.request.body;
  const datingUser = new DatingUser({
    id,
    time,
    age,
    collage,
    kakaoid,
    religion,
    appearance,
    personality,
    hobby,
    idealtype
  });
  try {
    await datingUser.save();
    await console.log("request come well");
  } catch (e) {
    return ctx.throw(500, e);
  }
  ctx.body = datingUser;
}
*/
export const create = async (ctx) => {
  {
  let id = 2;
  let time = "demo";
  let email = "demo";
  let address = "demo";
  let gender = "demo";
  let age = "demo";
  let collage = "demo";
  let self = 1;
  let same = 0;
  let appearance = "demo";
  let personality = "demo";
  let hobby = "demo";
  let religion = "demo";
  let smoke = "demo";
  let idealtype = "demo";
  let chatlink = "demo";
  let tag = "demo";
  let keysentence = "demo";
  let appearance2 = "demo";
  let personality2 = "demo";
  let hobby2 = "demo";
  let idealtype2 = "demo";
  let religion2 = "demo";
  let smoke2 = "demo";
  }
  /*
  const {
    id,
    time,
    email,
    address,
    gender,
    age,
    collage,
    self,
    same,
    appearance,
    personality,
    hobby,
    religion,
    smoke,
    idealtype,
    chatlink,
    tag,
    keysentence,
    appearance2,
    personality2,
    hobby2,
    idealtype2,
    religion2,
    smoke2
  } = ctx.request.body;
  */
  const datingUser = new DatingUser({
    id,
    time,
    email,
    address,
    gender,
    age,
    collage,
    self,
    same,
    appearance,
    personality,
    hobby,
    religion,
    smoke,
    idealtype,
    chatlink,
    tag,
    keysentence,
    appearance2,
    personality2,
    hobby2,
    idealtype2,
    religion2,
    smoke2
  });

  try {
    await datingUser.save();
    await console.log("request come well");
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = datingUser;
}


export const list = async (ctx) => {
  const { pageNumber } = ctx.params;

  let list;

  try{
    list = await DatingUser.find()
      .sort({_id: -1})
      .skip((pageNumber-1) * 20)
      .limit(20)
      .exec();
  } catch (e){
    return ctx.throw(500, e);
  }
  ctx.body = list;
}

export const all = async (ctx) => {
  let all;
  try{
    all = await DatingUser.count().exec();
  }catch (e){
    return ctx.throw(500, e);
  }
  ctx.body = all;
}

export const selected = async (ctx) => {
  const {id} = ctx.params;

  let user;

  try{
    user = await DatingUser.findOne({id:id}).exec();
  } catch (e){
    return ctx.throw(500, e);
  }

  if(!user){
    ctx.status = 404;
    ctx.body = { message: 'user not found'};
    return;
  }

  ctx.body = user;
}