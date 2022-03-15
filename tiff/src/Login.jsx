import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { TextField, Button, Stack } from '@mui/material';


async function loginUser(credentials) {
  return fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username
    });
    setToken(token);
  }

  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#bd0f0f',
    '&:hover': {
      backgroundColor: '#b01e1e',
    },
  }));


  return (
    <div className="login-wrapper">
      <h1>What's your name?</h1>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="column">
          <TextField
            color={'error'}
            label="Name"
            id="custom-css-outlined-input"
            required
            onChange={(e) => setUserName(e.target.value)} />
          <ColorButton variant="contained" type="submit">Next</ColorButton>
        </Stack>
        <div>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}