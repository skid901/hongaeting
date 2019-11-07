import mongoose, { Schema } from 'mongoose';

const SelfDatingSchema = new Schema({
  id: Number,
  time: String,
  email: String,
  address: String,
  gender: String,
  age: String,
  collage: String,
  status: String,
  self: Number,
  same: Number,
  appearance: String,
  personality: String,
  hobby: String,
  idealtype: String,
  religion: String,
  smoke: String,
  chatlink: String,
  tag: String,
  keysentence: String,
  appearance2: String,
  personality2: String,
  hobby2: String,
  idealtype2: String,
  religion2: String,
  smoke2: String,
  favorite2: String,
  avoidance2: String
});

const DatingUser = mongoose.model('datinguser', SelfDatingSchema);

export default DatingUser;