const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
// String is shorthand for {type: String}
  userName: String,
  likedBusinesses: Array,
//   body:   String,
  // likedBusinesses: [{ id: String, date: Date, default: Date.now() }],
  // date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
