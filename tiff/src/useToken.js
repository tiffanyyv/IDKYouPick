import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
    // use optional chaining operator ?. when accessing token property bc when you first access the application, the value of sessionStorage.getItem('token') will be undefined.
  }

  // fetch token and set as initial state
  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  }

  return {
    setToken: saveToken,
    token
  }
}