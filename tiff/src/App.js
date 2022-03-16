import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useToken from './useToken';
import Login from './Login.jsx';
import Forms from './Forms.jsx';

export const UserContext = createContext(localStorage.getItem("user"));

const App = () => {
  const { token, setToken } = useToken();
  const currentUser = localStorage.getItem("user");

  if (!token) {
    return <Login setToken={setToken}/>
  }

  return (
    <UserContext.Provider value={currentUser}>
    <div className="main-app">
      <div className="current-user">
      <h3>{currentUser}</h3>
      </div>
    <div className="wrapper">
      <h1>IDK, You Pick!</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/forms" element={<Forms/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </div>
    </UserContext.Provider>
  )
}



export default App;
