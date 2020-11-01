import React from 'react';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Todos from "./components/Todos"
import './App.css';
import Home from "./pages/Home"
import Admin from "./components/Admin"
import PrivateRoute from './hocs/PrivateRoute'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {

  return (

    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/todos" roles={["user","admin"]} component={Todos}/>
       
        <Route path="/admin" component={Admin}/>
      </Router>
    </div>


  );
}

export default App;
