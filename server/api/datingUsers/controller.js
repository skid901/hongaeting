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
  // let id = 2;
  // let time = "";
  // let email = "";
  // let address = "";
  // let gender = "";
  // let age = "";
  // let collage = "";
  // let self = 1;
  // let same = 0;
  // let appearance = "";
  // let personality = "";
  // let hobby = "";
  // let religion = "";
  // let smoke = "";
  // let idealtype = "";
  // let chatlink = "";
  // let tag = "";
  // let keysentence = "";
  // let appearance2 = "";
  // let personality2 = "";
  // let hobby2 = "";
  // let idealtype2 = "";
  // let religion2 = "";
  // let smoke2 = "";
  }
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