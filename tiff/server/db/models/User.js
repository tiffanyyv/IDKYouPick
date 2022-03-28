const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  likedBusinesses: Array,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
