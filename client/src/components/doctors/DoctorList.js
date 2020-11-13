import React, { useState } from 'react';
import DoctorData from './doctors.json'
import Modal from 'react-modal'
import { Row, Col } from 'react-bootstrap'
import { BiPlusMedical } from "react-icons/bi";
import './DoctorList.scss'
Modal.setAppElement('#root')
function DoctorList() {


    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (

        <div>
            <h3>Doctors</h3>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
                {DoctorData.map((doctorDetail, index) => {

                    return (



                        <div class="container">
                            <Col key={doctorDetail._id} >
                               <img src={doctorDetail.picture} className="image" style={{ width: "250px", height: "250px" }}></img>
                                <p >{doctorDetail.name.first} {doctorDetail.name.last}</p>
                            </Col>
                            <div class="middle">
                            <BiPlusMedical onClick={() => setModalIsOpen(true)} className="text" size="50px" style={{marginRight: "110px", marginBottom: "30px"}}/>
                            </div>
                        </div>
                    )

                })}
            </Row>
            {DoctorData.map((doctorDetail, index) => {
                 return (
            <Modal  isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
            style={{

            overlay: {
                backgroundColor: "grey"
            },
            content: {
                color: "orange"
            }
            }}
            >
                
                <h2>Modal title</h2>
                <p >{doctorDetail.name.first} {doctorDetail.name.last}</p>
                <div>
                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
                 )
             })}

        </div>

    );

}

export default DoctorList;