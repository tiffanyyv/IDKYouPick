import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { Button, Stack } from '@mui/material';


const RandomPlace = ({ zipCode, category }) => {
  const [businessName, setBusinessName] = useState('');
  const [businessPic, setBusinessPic] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [businessYelpURL, setBusinessYelpURL] = useState('');
  const currentUser = localStorage.getItem("user")

  useEffect(() => {
    getRandomPlace()
  }, [])

  const getRandomPlace = async () => {
    try {
      await axios.get('http://localhost:3001/api',
        {
          params: { location: zipCode, categories: category },
        }).then(res => {
          // console.log(res.data)
          setBusinessName(res.data.name);
          setBusinessPic(res.data.image_url);
          setBusinessAddress(res.data.location.display_address);
          setBusinessYelpURL(res.data.url);
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
      businessName, businessPic, businessAddress, businessYelpURL, currentUser
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
        <h2>{businessName ? businessName : ''}</h2>
        <h3>{businessAddress ? businessAddress[0] + " " + businessAddress[1] : ''}</h3>
        <img className="business-pic" src={businessPic} alt={businessName}></img>
      </div>
      <div className="random-place-buttons">
        <Stack spacing={2} direction="row" justifyContent="center">
          <ColorButton variant="contained" onClick={getRandomPlace}>Randomize</ColorButton>
          <ColorButton variant="contained" onClick={addToFavorites}>Add to Favorites</ColorButton>
        </Stack>
      </div>
    </div>

  )
}

export default RandomPlace;