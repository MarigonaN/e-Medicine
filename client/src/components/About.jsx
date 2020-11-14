import React, { Component } from "react";
import "./About.css";
class About extends Component {
  render() {
    return (
      <>
        <div
          className="mt-5"
          style={{ paddingTop: "80px", paddingBottom: "50px" }}
        >
          <div className="text-center">
            <h2
              className=" text-uppercase"
              style={{ marginBottom: "8px", fontFamily: "cursive" }}
            >
              About
            </h2>
          </div>
          <ul className=" timeline mt-5">
            <li className="timeline-inverted1">
              <div className="timeline-image1">
                <img className="rounded-circle img-fluid" src="" alt="" />
              </div>
              <div className=" timeline-panel1 vl">
                <div>
                  <h4>July 2020</h4>
                  <h4>Transition to Full Service</h4>
                </div>

                <div>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="vl3"></li>
            <li className="timeline-inverted2">
              <div className="timeline-image2">
                <img className="rounded-circle img-fluid" src="" alt="" />
              </div>
              <div className="timeline-panel2 vl2">
                <div>
                  <h4>October 2020</h4>
                  <h4>Phase Two Expansion</h4>
                </div>
                <div>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default About;
