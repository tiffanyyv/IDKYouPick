const mongoose = require('mongoose');
const { Schema } = mongoose;

const businessSchema = new Schema({
  businessName: String,
  businessPic: String,
  businessAddress: Array,
  businessYelpURL: String
});

const Business = mongoose.model('Business', businessSchema);
module.exports = Business;