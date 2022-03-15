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
      axios.get('http://localhost:3001/api',
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
    </div>

  )
}

export default RandomPlace;