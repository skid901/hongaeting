import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
})

UserSchema.methods.setPassword = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
}

UserSchema.methods.checkPassword = async (password) => {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
}

UserSchema.statics.findByUsername = (username) => {
  return this.findOne({ username })
}

const User = mongoose.model('User', UserSchema);
export default User;