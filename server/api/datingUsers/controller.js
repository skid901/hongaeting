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
  let id = 111,
    time = 111,
    age = 111,
    collage= 111,
    kakaoid= 111,
    religion= 111,
    appearance= 111,
    personality= 111,
    hobby= 111,
    idealtype= 111;

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


export const list = async (ctx) => {
  const { pageNumber } = ctx.params;

  let list;

  try{
    list = await DatingUser.find()
      .sort({_id: -1})
      .skip((pageNumber-1) * 10)
      .limit(10)
      .exec();
  } catch (e){
    return ctx.throw(500, e);
  }
  ctx.body = list;
}

export const all = async (ctx) => {
  let all;
  try{
    all = await DatingUser.find().exec();
  }catch (e){
    return ctx.throw(500, e);
  }
  ctx.body = all;
}