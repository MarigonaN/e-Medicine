import React, { Component } from 'react';

class Doctors extends Component {
   state = {
       doctors: []
   }
    
    render() {
        fetch("https://betterdoctor.p.rapidapi.com/api.betterdoctor.com/2016-03-01/doctors?name=", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b6b6146d81msh99e64dcf42515c3p16ceb9jsn0cda807686c3",
		"x-rapidapi-host": "betterdoctor.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
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

}

export default Doctors;