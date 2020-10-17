import React, { Component } from 'react';
class About extends Component {
    render() {
        return (
           <>

            <div className="mt-5">
                <div className="text-center">
                    <h2 className=" text-uppercase">About</h2>
                    <h3 className=" text-muted">About us</h3>
                </div>
                <ul className=" timeline mt-5">
                   
                 
                    <li >
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="" alt="" /></div>
                     
                        <div className=" timeline-panel vl">
                        
                            <div>
                          
                                <h4>July 2020</h4>
                                <h4 >Transition to Full Service</h4>
                            </div>
                            
                            <div ><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            
                        </div>
                    </li>
                    <li className="vl3">
                    
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="" alt="" /></div>
                        <div className="timeline-panel vl2">
                            <div>
                                <h4>October 2020</h4>
                                <h4 >Phase Two Expansion</h4>
                            </div>
                            <div><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    
                    
                </ul>
            </div>
     
               
                
           </>
        );
    }
}

export default About;