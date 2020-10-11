import React, { Component } from "react"
import {Container} from 'react-bootstrap'
export default class Navbar extends Component {


    render() {
        return (
        

            <header>
                <div className="overlay">

                <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
                    
                   
                   
                    <br></br>
                    <h1 className="mt-5">Simply The Best</h1>
                    <h3>Reasons for Choosing US</h3>
                </div>
            </header>

      
        )
    }
}