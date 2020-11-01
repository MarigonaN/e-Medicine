import React, { Component } from 'react';
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Services from "../components/Services"
import Footer from "../components/Footer"




class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
            
                <Portfolio />
                <Services />
                <About />
                <Footer />
            </div>
        );
    }
}

export default Home;