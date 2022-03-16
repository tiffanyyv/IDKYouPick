const express = require("express");
const path = require('path');
const app = express();
const db = require('./db');
const cors = require("cors");
require('dotenv').config();
const API_KEY = process.env.API_KEY;
const { add, addUserLikes, getFavoriteBusinesses } = require('../server/db/controllers/User.js')

const axios = require('axios');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
// app.use(express.static(path.join(__dirname, '../public')));

app.use('/login', (req, res) => {
  add(req, res)
  res.send({
    token: 'test123'
  })
})

app.post('/favorites', (req, res) => {
  // console.log(req.body)
  addUserLikes(req, res)
})

// app.get('/favorites', getFavoriteBusinesses)
app.get('/favorites', (req, res) => {
  getFavoriteBusinesses(req, res)
})

app.get('/api', async (req, res) => {
  try {
    await axios.get('https://api.yelp.com/v3/businesses/search', {
      params: {location: req.query.location, categories: req.query.categories, open_now: true},
      headers: {"Authorization": `Bearer ${API_KEY}`}
    }).then(results => {
      let filteredResults = results.data.businesses.filter(business => business.location.display_address !== undefined)
      let randomPlace = Math.floor(Math.random() * filteredResults.length)
        res.send(filteredResults[randomPlace])

    }).catch(err => {
      console.log('Error getting businesses: ', err)
      res.send('error')
    })
  }
  catch (err) {
    res.send('Error sending random business place')
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});