import mongoose, { Schema } from 'mongoose';

const SelfDatingSchema = new Schema({
  id: String,
  time: String,
  age: Number,
  collage: String,
  kakaoid: String,
  religion: String,
  appearance: String,
  personality: String,
  bobby: String,
  idealtype: String
});

const DatingUser = mongoose.model('datinguser', SelfDatingSchema);

export default DatingUser;
