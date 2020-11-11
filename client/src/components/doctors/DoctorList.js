import React, { Component } from 'react';
import DoctorData from './doctors.json'
import {Row, Col} from 'react-bootstrap'
class DoctorList extends Component {
    render() {
        return (
            <div>
                <h3>Doctors</h3>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
                {DoctorData.map((doctorDetail, index)=>{
                 
                 return (
                    <Col >
    <img src={doctorDetail.picture} style={{width: "250px", height: "250px",  marginLeft: "100px"}}></img>
    <p>{doctorDetail.name.first} {doctorDetail.name.last}</p>
    </Col>

                )
                   
   
             
                })}
                  </Row>
                
            </div>
                
        );
    }
}

export default DoctorList;