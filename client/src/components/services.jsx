import React, { Component } from 'react';

import {Row, Col, Container} from "react-bootstrap"
class Services extends Component {
    render() {
        return (
  
              <div className="container-fluid services" >
            
                 
                        <div className="text-center">

                            <h2 className="section-heading text-uppercase mt-5 ">Services</h2>
                           
                        </div>
                    
<Row className=" text-center mt-3">
                     
                            <Col md={4}>
                                <img className="img-services" src="https://www.kindpng.com/picc/m/255-2558592_transparent-pharmacy-icon-png-va-pharmacy-png-download.png" alt="Smth"></img>
                                <h4 className="my-3">Pharmacy</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            </Col>
                            <Col md={4}>
                                <img className="img-services" src="https://images.vexels.com/media/users/3/144204/isolated/preview/f6d082b22c3fbdc5d2927ff1c7cd57d4-hospital-building-icon-by-vexels.png" alt="Smth"></img>
                                <h4 className="my-3">Hospital</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            </Col>
                            <Col md={4}>
                                <img className="img-services" src="https://cdn.iconscout.com/icon/free/png-512/doctor-567-1118047.png" alt="Smth"></img>
                                <h4 className="my-3">Doctors</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            </Col>
                          
     </Row>
            
            </div>
    
        );
    }
}

export default Services;