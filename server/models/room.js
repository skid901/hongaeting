import mongoose, { Schema } from 'mongoose';

const RoomSchema = new Schema({
  roomId: String,
  roomType: String,
  entry: [{ type: Schema.Types.ObjectId, required: true, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
});

const Room = mongoose.model('Room', RoomSchema);

export default Room;
