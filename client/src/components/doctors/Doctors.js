import React, { Component } from 'react';
import DoctorList from './DoctorList'
import Modal from 'react-modal'
class Doctors extends Component {
   state = {
       doctors: []
   }
    
    render() {
      
        return(
       <>
       <DoctorList />
       <button>Open modal</button>
         

     
       </>
        )
}

}

export default Doctors;