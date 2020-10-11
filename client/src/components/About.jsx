import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap"
class About extends Component {
    render() {
        return (
           <>

            <div class="mt-5">
                <div class="text-center">
                    <h2 class=" text-uppercase">About</h2>
                    <h3 class=" text-muted">About us</h3>
                </div>
                <ul class=" timeline mt-5">
                   
                 
                    <li >
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="" alt="" /></div>
                     
                        <div class=" timeline-panel vl">
                        
                            <div>
                          
                                <h4>July 2020</h4>
                                <h4 >Transition to Full Service</h4>
                            </div>
                            
                            <div ><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            
                        </div>
                    </li>
                    <li className="vl3">
                    
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="" alt="" /></div>
                        <div class="timeline-panel vl2">
                            <div>
                                <h4>October 2020</h4>
                                <h4 >Phase Two Expansion</h4>
                            </div>
                            <div><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    
                    
                </ul>
            </div>
     
               
                
           </>
        );
    }
}

export default About;