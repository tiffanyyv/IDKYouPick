import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { TextField, Button, Stack } from '@mui/material';
import RandomPlace from './RandomPlace.jsx';

const Forms = () => {
  const [zipCode, setZipCode] = useState('');
  const [category, setCategory] = useState('');
  const [firstForm, setFirstForm] = useState(true);
  const [secondForm, setSecondForm] = useState(false);
  const [showPlace, setShowPlace] = useState(false);


  const isValidUSZip = (zipCode) => {
    return /^\d{5}(-\d{4})?$/.test(zipCode);
  }

  const isValidCategory = (categoryInput) => {
    return /^[A-Za-z]+$/.test(categoryInput)
  }

  const handleZipCodeSubmit = () => {
    if (isValidUSZip(zipCode)) {
      setFirstForm(false);
      setSecondForm(true);
    } else {
      alert("Please enter a valid zipcode")
    }
  }

  const handleCategorySubmit = () => {
    if (isValidCategory(category)) {
      setSecondForm(false);
      setShowPlace(true);
    } else {
      alert("Please enter a valid category")
    }
  }


  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#bd0f0f',
    '&:hover': {
      backgroundColor: '#b01e1e',
    },
  }));


  return (
    <div>
      {firstForm &&
      <div>
        <h1>Where are you located?</h1>
      <Stack spacing={2} direction="column">
        <TextField
        color={'error'}
        label="Zipcode"
        id="custom-css-outlined-input"
        required
        onChange={(e) => setZipCode(e.target.value)}/>
        <ColorButton variant="contained" onClick={handleZipCodeSubmit}>Next</ColorButton>
      </Stack>
      </div>}
      {secondForm && <div>
        <h1>What type of food are you feeling?</h1>
      <Stack spacing={2} direction="column">
        <TextField
        color={'error'}
        label="Category"
        id="custom-css-outlined-input"
        required
        onChange={(e) => setCategory(e.target.value)}/>
        <ColorButton variant="contained" onClick={handleCategorySubmit}>Next</ColorButton>
      </Stack>
      </div>}
      {showPlace && <RandomPlace zipCode={zipCode} category={category}/>}
    </div>
  )

}

export default Forms;