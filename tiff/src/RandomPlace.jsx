import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material'


const RandomPlace = ({ zipCode, category }) => {
  const [businessName, setBusinessName] = useState('');
  const [businessPic, setBusinessPic] = useState('');
  // const [businessRating, setBusinessRating] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');

  useEffect(() => {
    getRandomPlace()
  }, [])

  const getRandomPlace = async () => {
    try {
      await axios.get('http://localhost:3001/api',
      {
        params: {location: zipCode, categories: category},
      }).then(res => {
        console.log(res.data)
        setBusinessName(res.data.name);
        setBusinessPic(res.data.image_url);
        setBusinessAddress(res.data.location.display_address);
      }).catch(err => {
        console.log(err)
      })
    }
    catch (err) {
      console.log('Error getting random business')
    }
  }

  const addToFavorites = () => {
    axios.post('http://localhost:3001/favorites', {
      businessName, businessPic, businessAddress
    }).then(res => {
      console.log('Added to favorites')
    }).catch(err => {
      console.log('Error adding to favorites')
    })
  }

  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#bd0f0f',
    '&:hover': {
      backgroundColor: '#b01e1e',
    },
  }));

  return (
    <div className="random-place">
      <div className="business-info">
      <h2>{businessName}</h2>
      <h3>{businessAddress}</h3>
      <img src={businessPic} alt={businessName}></img>
      </div>
      <ColorButton variant="contained" onClick={getRandomPlace}>Randomize</ColorButton>
      <ColorButton variant="contained" onClick={addToFavorites}>Add to Favorites</ColorButton>
    </div>

  )
}

export default RandomPlace;