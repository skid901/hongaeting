import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  email: String,
  hashedPassword: String,
  nickName: String,
  sex: String,
  authEmail: String,
  hashedAuthEmail: String,
  isAuthed: Boolean,
});

UserSchema.methods.setPassword = async function(password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function(password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

UserSchema.methods.setHashedAuthEmail = async function(authEmail) {
  const hash = await bcrypt.hash(authEmail, 10);
  this.hashedAuthEmail = hash;
};

UserSchema.methods.checkHashedAuthEmail = async function(authEmail) {
  const result = await bcrypt.compare(authEmail, this.hashedAuthEmail);
  return result;
};

UserSchema.methods.checkIsAuthed = async function(email) {
  const user = this.findOne({ email });
  return user.toJSON().isAuthed;
};

UserSchema.methods.serialize = function() {
  const data = this.toJSON();
  delete data.hashedPassword;
  delete data.hashedAuthEmail;
  return data;
};

UserSchema.statics.findByEmail = function(email) {
  return this.findOne({ email });
};

UserSchema.statics.findByNickName = function(nickName) {
  return this.findOne({ nickName });
};

UserSchema.statics.findByAuthEmail = function(authEmail) {
  return this.findOne({ authEmail });
};

UserSchema.statics.findByHashedAuthEmail = function(hashedAuthEmail) {
  return this.findOne({ hashedAuthEmail });
};

const User = mongoose.model('User', UserSchema);

export default User;
