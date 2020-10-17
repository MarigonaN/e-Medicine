import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import Home from "./pages/Home"
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {

  return (

    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home}/>
  
    </Router>
    </div>

   
  );
}

export default App;
