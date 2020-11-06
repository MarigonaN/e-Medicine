import React, { Component } from 'react';
import About from "../components/About"
import Navbar from '../components/Navbar'
import Services from "../components/Services"
import Footer from "../components/Footer"




class Home extends Component {
    render() {
        return (
            <div >
                 <Navbar />
            <div className="container-fluid">
            
           
                <Services />
                <About />
                <Footer />
            </div>
            </div>
        );
    }
}

export default Home;