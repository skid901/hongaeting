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
  
  if(email === '' || address === '' || gender === '' || age === '' || collage === ''){
    id = id.toString();
    try{
      if (self) {DatingUser.update({id : id},{self : self})};
      if (same) {DatingUser.update({id:`${id}`},{same : same})};
      if (appearance) {DatingUser.update({id : id},{appearance : appearance})};
      if (personality) {DatingUser.update({id:`${id}`},{personality : personality})};
      if (hobby) {DatingUser.update({id : id},{hobby : hobby})};
      if (religion) {DatingUser.update({id:`${id}`},{religion : religion})};
      if (smoke) {DatingUser.update({id : id},{smoke : smoke})};
      if (idealtype) {DatingUser.update({id:`${id}`},{idealtype : idealtype})};
      if (chatlink) {DatingUser.update({id : id},{chatlink : chatlink})};
      if (tag) {DatingUser.update({id:`${id}`},{tag : tag})};
      if (keysentence) {DatingUser.update({id : id},{keysentence : keysentence})};
      if (appearance2) {DatingUser.update({id:`${id}`},{appearance2 : appearance2})};
      if (personality2) {DatingUser.update({id : id},{personality2 : personality2})};
      if (hobby2) {DatingUser.update({id:`${id}`},{hobby2 : hobby2})};
      if (idealtype2) {DatingUser.update({id : id},{idealtype2 : idealtype2})};
      if (religion2) {DatingUser.update({id:`${id}`},{religion2 : religion2})};
      if (smoke2) {DatingUser.update({id : id},{smoke2 : smoke2})};
     
      console.log(`${id} 수정완료`);
    } catch (e){
        return ctx.throw(500, e);
    }
    
    ctx.body = id;
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