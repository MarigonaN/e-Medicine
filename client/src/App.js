import React from 'react';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Todos from "./components/Todos"
import './App.css';
import Home from "./pages/Home"
import Admin from "./components/Admin"
import PrivateRoute from './hocs/PrivateRoute'
import UnPrivateRoute from './hocs/UnPrivateRoute'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {

  return (

    <div className="App">
      <Router>
     
        <Route exact path="/" component={Home} />
        <UnPrivateRoute path="/login" component={Login}/>
        <UnPrivateRoute path="/register" component={Register}/>
     
        <PrivateRoute path="/todos" roles={["user","admin"]} component={Todos}/>
        <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/>
       
     
      </Router>
    </div>


  );
}

export default App;
