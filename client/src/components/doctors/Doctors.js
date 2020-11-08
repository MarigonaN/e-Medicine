import React, { Component } from 'react';

class Doctors extends Component {
   state = {
       doctors: []
   }
    
    render() {
        return(
       <>
       <div>
    <h1>{this.props.text}</h1>
       </div>
       <div>
    <h1>{this.state.doctors.map(doctor=> <img src={doctor.img}></img>)}</h1>
       </div>
       </>
        )
}
componentDidMount = async () => {
    const resp = await fetch("https://betterdoctor.p.rapidapi.com/api.betterdoctor.com/2016-03-01/doctors?name=")
    if (resp.ok){
        const doctors = await resp.json()
        this.setState({
            doctors: doctors
        })
    }
}
}

export default Doctors;