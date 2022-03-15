const mongoose = require('mongoose');
const { Schema } = mongoose;

const businessSchema = new Schema({
  // String is shorthand for {type: String}
  businessName: String,
  businessPic: String,
  businessAddress: Array
//   body:   String,
//   comments: [{ body: String, date: Date, default: Date.now }],
  // date: {
  //   type: Date,
  //   default: Date.now()
  // },
//   hidden: Boolean,
  // meta: {
  //   favs:  Number // how many other users saved this business
  // }
});

const Business = mongoose.model('Business', businessSchema);
module.exports = Business;