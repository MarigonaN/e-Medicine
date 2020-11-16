import React, { useState } from "react";
import PharmacyData from "./pharmacy.json";
import Modal from "react-modal";
import { Row, Col, Container } from "react-bootstrap";
import { BiPlusMedical } from "react-icons/bi";

Modal.setAppElement("#root");
function PharmacyList() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pharmacyIndex, setPharmacyIndex] = useState(0);
  return (
    <div className="container-fluid">
      <h3
        className="display-4 mt-5 mb-5"
        style={{ fontFamily: "cursive", textAlign: "center" }}
      >
        Pharmacy
      </h3>

      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
        {PharmacyData.map((PharmacyDetail, index) => {
          console.log("PharmacyDetail", PharmacyDetail);
          return (
            <div class="container" key={PharmacyDetail._id}>
              <Col md={12}>
                <img
                  src={PharmacyDetail.image}
                  className="image"
                  style={{ width: "250px" }}
                ></img>
                <p>{PharmacyDetail.name}</p>
                <p class="middle">
                  <BiPlusMedical
                    onClick={() => (
                      setModalIsOpen(true), setPharmacyIndex(index)
                    )}
                    className="text"
                    size="50px"
                  />
                </p>
              </Col>
            </div>
          );
        })}
      </Row>

      <Modal
        id="modal"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            color: "white",
          },
        }}
      >
        <h2 className="display-4 text-center">Welcome to my About</h2>
        <hr style={{ borderTop: "1px solid white", marginBottom: "50px" }}></hr>
        <Row xs={2} md={2}>
          <Col md={6}>
            <img
              id="imageRadius"
              src={`${PharmacyData[pharmacyIndex].image}`}
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default PharmacyList;
