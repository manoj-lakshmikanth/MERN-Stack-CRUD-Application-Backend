import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const Schema = mongoose.Schema;
let userSchema = new Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
});

const user = mongoose.model('User', userSchema);
console.log(user);
// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'User');

export default user;
