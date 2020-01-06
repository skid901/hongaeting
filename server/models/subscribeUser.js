import mongoose, { Schema } from 'mongoose';

const SubscribeUserSchema = new Schema({
  phone: String
});

const SubscribeUser = mongoose.model('subscribeuser', SubscribeUserSchema);

export default SubscribeUser;