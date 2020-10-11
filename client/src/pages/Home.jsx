import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Services from "../components/services"
import Footer from "../components/Footer"


class Home extends Component {
    render() {
        return (
            <div>
                 <Navbar />
   <Portfolio />
   <Services />
    <About />


<Footer />
            </div>
        );
    }
}

export default Home;