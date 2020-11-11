import React, { Component } from 'react';
import DoctorList from './DoctorList'
class Doctors extends Component {
   state = {
       doctors: []
   }
    
    render() {
      
        return(
       <>
       <DoctorList />
       <div>
 
       </div>
       </>
        )
}

}

export default Doctors;