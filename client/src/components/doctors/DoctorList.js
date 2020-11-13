import React, { useState } from "react";
import DoctorData from "./doctors.json";
import Modal from "react-modal";
import { Row, Col } from "react-bootstrap";
import { BiPlusMedical } from "react-icons/bi";
import "./DoctorList.scss";
Modal.setAppElement("#root");
function DoctorList() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [doctorIndex, setDoctorIndex] = useState(0);
  return (
    <div>
      <h3>Doctors</h3>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
        {DoctorData.map((doctorDetail, index) => {
          console.log("doctorDetail", doctorDetail);
          return (
            <div class="container" key={doctorDetail._id}>
              <Col md={8}>
                <img
                  src={doctorDetail.picture}
                  className="image"
                  style={{ width: "250px" }}
                ></img>
                <p>
                  {doctorDetail.name.first} {doctorDetail.name.last}
                </p>
                <div class="middle">
                  <BiPlusMedical
                    onClick={() => (
                      setModalIsOpen(true), setDoctorIndex(index)
                    )}
                    className="text"
                    size="50px"
                    style={{ marginRight: "110px", marginBottom: "30px" }}
                  />
                </div>
              </Col>
            </div>
          );
        })}
      </Row>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            color: "orange",
          },
        }}
      >
        <h2>Modal title</h2>
        <p>{`${DoctorData[doctorIndex].name.first} ${DoctorData[doctorIndex].name.last}`}</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default DoctorList;
