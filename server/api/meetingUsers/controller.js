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
    nickname,
    tag,
    keysentence
  } = ctx.request.body;
  
  // let id = 20;
  // let time ="2019-11-06T11:57:56.589Z";
  // let email = "pgdn06288888@gmail.com";
  // let number = "3:3";
  // let age1 = 22;
  // let collage1 = "공과대학";
  // let age2 = 23;
  // let collage2 = "미대학";
  // let age3 = 24;
  // let collage3 = "문과대학";
  // let age4;
  // let collage4;
  // let gender = "남학우";
  // let appearance = "3명의 키는 170 초~중반 정도 되구요, 대한민국 남자 평균키에 조금 아쉬운 친구는 닥터마틴 신발 굽으로 커버를 하며, 평균보다 초과한 친구는 해당 부분만큼 부모님께 감사한 마음을 가지며 살아가고있어요."
  // let personality = "기본적으로 상대방을 배려하는 마음과 감정을 상하게 하지 않으려고 노력하는 편이며, 특히 말할 대 강한 표현보다는 부드럽고 정감있는 표현들을ㅈ 좋아합니다."
  // let hobby = "3명 중에는 일주일에 넷플릭스나 영화관에서 3~4편은 기본으로 보는 영화 덕후도 있구오, 스타트업 IT 행사들을 꼬박꼬박 참여하는 스타트업 꿈나무, 그리고 도서관 붙박이로 자리를 지키며 열공하는 학점왕도 있어요."
  // let drink = "3명 모두 술을 즐기는 스타일은 아니에요. 다만 좋아하는 사람들과 함께 있을 때, 좋은 분위기에서 여러 이야기들을 나눌 때 적당한 취기로 행복한 시간을 보내는 것을 좋아합니다. 평균 주량은 소주 1병 또는 소맥 1.5병인 것 같아요. 그 이후에는 잘 못마시게 되더라구요."
  // let idealtype = "아담한 스탈일을 좋아하는 친구도 있고, 키가 큰 분에게 눈길이 가는 친구도 있어서요, 키는 괜찮습니다. 미대 분들이나 공대분들을 만나고 싶은작은 바람은 있어요 ㅎㅎ 그리고 나이는 아마 저희보다 어리실 것 같아서, 반대로 연상을 선호하시는 여학우분들과 맞을 것 같습니다. 통통함, 그리고, 눈빛~~~."
  // let chatlink = "chatlinkchatlinkchatlink"
  // let tag = "#첫번째 학우_긴생머리, 청순한, 조용한, 차분한, 여행 #두번째 학우_단발, 귀여운, 톡톡튀는, 필름사진 #세번째 학우_인싸, 활발한, 외향적인, 투머치토커";
  // let keysentence = "에벨벨베레베베벨베베벱레베벨";
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

export const list = async (ctx) => {
  const { pageNumber, gender} = ctx.params;

  let list ={};
  if(gender == 0){
    try{
      list = await MeetingUser.find({gender: "남학우"})
        .sort({_id: -1})
        .skip((pageNumber-1) * 20)
        .limit(20)
        .exec();
    } catch (e){
      return ctx.throw(500, e);
    }
  }else if(gender == 1){
    try{
      list = await MeetingUser.find({gender: "여학우"})
        .sort({_id: -1})
        .skip((pageNumber-1) * 20)
        .limit(20)
        .exec();
    } catch (e){
      return ctx.throw(500, e);
    }
  }else if(gender == 2){
    try{
      list = await MeetingUser.find()
        .sort({_id: -1})
        .skip((pageNumber-1) * 20)
        .limit(20)
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
  console.log(count);
  ctx.body = count;
}