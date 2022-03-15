import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useToken from './useToken';
import Login from './Login.jsx';
import Forms from './Forms.jsx';



const App = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken}/>
  }

  return (
    <div className="wrapper">
      <h1>IDK, You Choose</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/forms" element={<Forms/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App;
