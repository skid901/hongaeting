import MeetingUser from '../../models/selfMeeting';

export const create = async (ctx) => {
  const {
    time,
    email,
    gender,
    number,
    age1,
    collage1,
    age2,
    collage2,
    age3,
    collage3,
    age4,
    collage4,
    appearance,
    personality,
    hobby,
    drink,
    idealtype,
    chatlink,
    nickname,
    tag,
    keysentence
  } = ctx.request.body;
  if(email === '' || gender === '' || number === ''){

  }else{
    const meetingUser = new MeetingUser({
      id,
      time,
      email,
      gender,
      number,
      age1,
      collage1,
      age2,
      collage2,
      age3,
      collage3,
      age4,
      collage4,
      appearance,
      personality,
      hobby,
      drink,
      idealtype,
      nickname,
      tag,
      keysentence
    })
    try {
      await meetingUser.save();
      await console.log("request come well");
    } catch (e) {
      return ctx.throw(500, e);
    }

    ctx.body = meetingUser;
  }
}

export const list = async (ctx) => {
  const { pageNumber, gender} = ctx.params;

  let list ={};
  if(gender == 0){
    try{
      list = await MeetingUser.find({gender: "남학우"})
        .sort({_id: -1})
        // .skip((pageNumber-1) * 20)
        // .limit(20)
        .exec();
    } catch (e){
      return ctx.throw(500, e);
    }
  }else if(gender == 1){
    try{
      list = await MeetingUser.find({gender: "여학우"})
        .sort({_id: -1})
        // .skip((pageNumber-1) * 20)
        // .limit(20)
        .exec();
    } catch (e){
      return ctx.throw(500, e);
    }
  }else if(gender == 2){
    try{
      list = await MeetingUser.find()
        .sort({_id: -1})
        // .skip((pageNumber-1) * 20)
        // .limit(20)
        .exec();
    } catch (e){
      return ctx.throw(500, e);
    }
  }
  // try{
  //   list = await MeetingUser.find({gender: "남학우"})
  //     .sort({_id: -1})
  //     .skip((pageNumber-1) * 20)
  //     .limit(20)
  //     .exec();
  // } catch (e){
  //   return ctx.throw(500, e);
  // }
  ctx.body = list;
}
/*
const selected = async (ctx) => {
  const {id} = ctx.params;

  let user;

  try{
    user = await MeetingUser.findOne({id:id}).exec();
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
*/

export const count = async (ctx) => {
  const {gender} = ctx.params;

  let count;

  if(gender == 0){
    try{
      count = await MeetingUser.find({gender: "남학우"}).count().exec();
    }
    catch (e){
      return ctx.throw(500, e);
    }
  }else if(gender == 1){
    try{
      count = await MeetingUser.find({gender: "여학우"}).count().exec();
    }
    catch (e){
      return ctx.throw(500, e);
    }
  }else if(gender == 2){
    try{
      count = await MeetingUser.find().count().exec();
    }
    catch (e){
      return ctx.throw(500, e);
    }
  }
  ctx.body = count;
}