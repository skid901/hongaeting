import MeetingUser from '../../models/selfMeeting';

export const create = async (ctx) => {
  const {
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
    chatlink,
    tag,
    keysentence
  } = ctx.request.body;

  const meetinUser = new MeetingUser({
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
    chatlink,
    tag,
    keysentence
  })
  try {
    await meetingUser.save();
    await console.log("request come well");
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = datingUser;
}

export const list = async (ctx) => {
  const { pageNumber } = ctx.params;

  let list ={};

  try{
    list = await MeetingUser.find()
      .sort({_id: -1})
      .skip((pageNumber-1) * 20)
      .limit(20)
      .exec();
  } catch (e){
    return ctx.throw(500, e);
  }
  ctx.body = list;
}

export const selected = async (ctx) => {
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