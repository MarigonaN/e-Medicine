import React, { Component } from "react";
import DoctorList from "./DoctorList";

class Doctors extends Component {
  state = {
    doctors: [],
  };

  render() {
    return (
      <>
        <DoctorList />
      </>
    );
  }
}

export default Doctors;
