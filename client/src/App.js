import React, {useContext} from 'react';
import {AuthContext} from './context/AuthContext'
import './App.css';
import Home from "./pages/Home"
function App() {

  const {user, setUser, isAuthenticated, setIsAuthenticated} = useContext(AuthContext);
  console.log(user)
  console.log(isAuthenticated)
  return (

    <div className="App">
<p>placeholder</p>
    {/* <Home /> */}

    </div>

   
  );
}

export default App;
