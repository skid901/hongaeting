import mongoose, { Schema } from 'mongoose';

const SelfDatingSchema = new Schema({
  id: Number,
  time: String,
  email: String,
  
  gender: String,
  age: String,
  status: String,
  collage: String,
  address: String,
  
  self: Number,
  same: Number,
  appearance: String,
  personality: String,
  hobby: String,
  idealtype: String,
  religion: String,
  smoke: String,
  tag: String,
  keysentence: String,
  appearance2: String,
  personality2: String,
  hobby2: String,
  idealtype2: String,
  firstkey: String,
  secondkey: String,
  favorite2: String,
  avoidance2: String,
  religion2: String,
  smoke2: String,
});

const DatingUser = mongoose.model('datinguser', SelfDatingSchema);

export default DatingUser;