import React, { Component } from 'react';
import DoctorData from './doctors.json'
class DoctorList extends Component {
    render() {
        return (
            <div>
                <h3>Doctors</h3>
                {DoctorData.map((doctorDetail, index)=>{
                    return <img src={doctorDetail.picture} style={{width: "250px", height: "250px", marginBottom: "100px", marginLeft: "100px"}}></img>
                })}
            </div>
        );
    }
}

export default DoctorList;