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
  
  // let id = 2;
  // let time = "2019-11-04T06:50:31.403Z";
  // let email = "pgdn06288888@gmail.com";
  // let address = "010-2851-3468";
  // let gender = "남학우";
  // let age = "22세";
  // let collage = "건축대학";
  // let self = 0;
  // let same = 0;
  // let appearance = "매우매우매우매우매우잘생김";
  // let personality = "성격성격성격성격성격성격성격";
  // let hobby = "춤취미취미취미치미취미취미취미취미";
  // let religion = "무교";
  // let smoke = "비흡연자";
  // let idealtype = "이상형이상형이상형이상형이상형이상형";
  // let chatlink = "linklinklinklinklinklinn";
  // let tag = "#ㅁㅁㅁ#ㅠㅠㅠ#vvv#sjgl#태그";
  // let keysentence = "한마디두마디세마디네마디";
  // let appearance2 = "demo";
  // let personality2 = "demo";
  // let hobby2 = "demo";
  // let idealtype2 = "demo";
  // let religion2 = "demo";
  // let smoke2 = "demo";
  
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
  const { pageNumber, gender} = await ctx.params;
  let list ={};
  if(gender == 0){
    try{
      list = await DatingUser.find({gender: "남학우", self: 1})
        .sort({_id: -1})
        .skip((pageNumber-1) * 20)
        .limit(20)
        .exec();
    } catch (e){
      return ctx.throw(500, e);
    }
  }else if(gender == 1){
    try{
      list = await DatingUser.find({gender: "여학우", self:1})
        .sort({_id: -1})
        .skip((pageNumber-1) * 20)
        .limit(20)
        .exec();
    } catch (e){
      return ctx.throw(500, e);
    }
  }else if(gender == 2){
    try{
      list = await DatingUser.find({self: 1})
        .sort({_id: -1})
        .skip((pageNumber-1) * 20)
        .limit(20)
        .exec();
    } catch (e){
      return ctx.throw(500, e);
    }
  }
  ctx.body = list;
}

export const count = async (ctx) => {
  const {gender} = ctx.params;

  let count;

  if(gender == 0){
    try{
      count = await DatingUser.find({gender: "남학우", self: 1}).count().exec();
    }
    catch (e){
      return ctx.throw(500, e);
    }
  }else if(gender == 1){
    try{
      count = await DatingUser.find({gender: "여학우", self: 1}).count().exec();
    }
    catch (e){
      return ctx.throw(500, e);
    }
  }else if(gender == 2){
    try{
      count = await DatingUser.find({self: 1}).count().exec();
    }
    catch (e){
      return ctx.throw(500, e);
    }
  }
  ctx.body = count;
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