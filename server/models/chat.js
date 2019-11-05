import mongoose, { Schema } from 'mongoose';

const ChatSchema = new Schema({
  room: { type: Schema.Types.ObjectId, required: true, ref: 'Room' },
  chatNum: String,
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  chat: String,
  gif: String,
  createdAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
});

ChatSchema.statics.findChatLogList = async function(room) {
  return this.find({ $and: [{ room }, { isDeleted: false }] }).populate(
    'user',
    'email nickName',
  );
};

ChatSchema.statics.findChatCount = async function(room) {
  const chatList = await this.find({ room });
  return chatList === 0 ? 0 : chatList.length;
};

ChatSchema.methods.serialize = function() {
  const data = this.toJSON();
  delete data.isDeleted;
  return data;
};

ChatSchema.statics.findChatLog = async function(room, chatNum) {
  return this.find({
    $and: [{ room }, { chatNum }, { isDeleted: false }],
  }).populate('user', 'email nickName');
};

const Chat = mongoose.model('Chat', ChatSchema);

export default Chat;
