import mongoose, { Schema } from 'mongoose';

const RoomSchema = new Schema({
  roomId: String,
  roomType: String,
  host: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  entry: [{ type: Schema.Types.ObjectId, required: true, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
});

RoomSchema.statics.findRoomCount = async function() {
  const roomList = await this.find();
  return roomList === 0 ? 0 : roomList.length;
};

RoomSchema.statics.findByTypeAndEntry = async function(roomType, ...entry) {
  const condition = [];
  condition.push({ roomType });
  entry.forEach(val => {
    condition.push({ entry: { $in: val } });
  });
  return this.find({ $and: condition });
};

RoomSchema.statics.findByRoomId = async function(roomId) {
  return this.findOne({ roomId });
};

const Room = mongoose.model('Room', RoomSchema);

export default Room;
