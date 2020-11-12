import React, { Component } from 'react';
import { FaHospitalAlt } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import {Row, Col} from "react-bootstrap"
class Services extends Component {
    render() {
        return (
  
              <div className="container-fluid services" style={{paddingTop: "70px"}} >
            
                 
                        <div className="text-center">

                            <h2 className="section-heading text-uppercase mt-5 " style={{marginBottom: "100px", fontFamily: "cursive"}}>Services</h2>
                           
                        </div>
                    
<Row className=" text-center mt-3">
                     
                            <Col md={4}>
                               <MdLocalPharmacy style={{fontSize: "100px"}}/>
                                <h4 className="my-3">Pharmacy</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            </Col>
                            <Col md={4}>
                            <FaHospitalAlt style={{fontSize: "100px"}}/>
                                <h4 className="my-3">Hospital</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            </Col>
                            <Col md={4}>
                                <FaUserNurse style={{fontSize: "100px"}}/>
                                <h4 className="my-3">Doctors</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            </Col>
                          
     </Row>
            
            </div>
    
        );
    }
}

export default Services;