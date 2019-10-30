import mongoose, { Schema } from 'mongoose';

const ChatSchema = new Schema({
  room: { type: Schema.Types.ObjectId, required: true, ref: 'Room' },
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  chat: String,
  gif: String,
  createdAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
});

const Chat = mongoose.model('Chat', ChatSchema);

export default Chat;
