//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoURI = 'mongodb://localhost:27017/local';
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

  module.exports = db;