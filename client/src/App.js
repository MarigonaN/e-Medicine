import React from 'react';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import './App.css';
import Home from "./pages/Home"
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {

  return (

    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </div>


  );
}

export default App;
