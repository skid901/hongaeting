import mongoose, { Schema } from 'mongoose';

const SelfMeetingSchema = new Schema({
  id: Number,
  time: String,
  email: String,
  gender: String,
  number: String,
  age1: Number,
  collage1: String,
  age2: Number,
  collage2: String,
  age3: Number,
  collage3: String,
  age4: Number,
  collage4: String,
  appearance: String,
  personality: String,
  hobby: String,
  drink: String,
  idealtype: String,
  nickname: String,
  tag: String,
  keysentence: String
});

const MeetingUser = mongoose.model('meetinguser', SelfMeetingSchema);

export default MeetingUser;