import DatingUser from '../../models/selfDating';
import SelfDatingUserStore from '../../../src/store/SelfDatingUserStore';
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
  let {id} = ctx.request.body;
  const {
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
  if(email === '' || address === '' || gender === '' || age === '' || collage === ''){
    console.log("a");
  }
  else{
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
  
}


export const list = async (ctx) => {
  const { pageNumber, gender} = await ctx.params;
  let list ={};
  if(gender == 0){
    try{
      list = await DatingUser.find({gender: "남학우", self: 1})
        .sort({_id: -1})
        // .skip((pageNumber-1) * 1000)
        // .limit(1000)
        .exec();
    } catch (e){
      return ctx.throw(500, e);
    }
  }else if(gender == 1){
    try{
      list = await DatingUser.find({gender: "여학우", self:1})
        .sort({_id: -1})
        // .skip((pageNumber-1) * 1000)
        // .limit(1000)
        .exec();
    } catch (e){
      return ctx.throw(500, e);
    }
  }else if(gender == 2){
    try{
      list = await DatingUser.find({self: 1})
        .sort({_id: -1})
        // .skip((pageNumber-1) * 1000)
        // .limit(1000)
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