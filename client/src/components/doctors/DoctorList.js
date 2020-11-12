import React, { useState } from 'react';
import DoctorData from './doctors.json'
import Modal from 'react-modal'
import { Row, Col } from 'react-bootstrap'
function DoctorList()  {
  

  
        const  [modalIsOpen,setModalIsOpen] = useState(false)
        return (

            <div>
                <h3>Doctors</h3>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
                    {DoctorData.map((doctorDetail, index) => {

                        return (
                        
                            <Col key={doctorDetail._id}>
                              <button onClick={()=> setModalIsOpen(true)}>  <img src={doctorDetail.picture} style={{ width: "250px", height: "250px" }}></img></button>
                                <p >{doctorDetail.name.first} {doctorDetail.name.last}</p>
                            </Col>
                           
                         
                        )
                      
                    })}
                </Row>
                <Modal isOpen={modalIsOpen}>
                        <h2>Modal title</h2>
                        <div>
                            <button onClick={()=> setModalIsOpen(false)}>Close</button>
                        </div>
                    </Modal>

            </div>

        );
    
}

export default DoctorList;