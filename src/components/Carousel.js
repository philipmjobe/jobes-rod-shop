import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img alt="" src="assets/1.jpeg" />
          <p className="legend">Suspension work</p>
        </div>
        <div>
          <img alt="" src="assets/2.jpeg" />
          <p className="legend">Engine diagnosis</p>
        </div>
        <div>
          <img alt="" src="assets/3.jpeg" />
          <p className="legend">Noise diagnosis</p>
        </div>
        <div>
          <img alt="" src="./assets/un-liu-yqsgL2wKEHA-unsplash.jpg" />
          <p className="legend">Brakes</p>
        </div>
        <div>
          <img alt="" src="assets/3.jpeg" />
          <p className="legend">Vehicle maintenance</p>
        </div>
        <div>
          <img alt="" src="assets/3.jpeg" />
          <p className="legend">Aftermarket parts install</p>
        </div>
        <div>
          <img alt="" src="assets/3.jpeg" />
          <p className="legend">Lowering springs/ lift kits</p>
        </div>
        <div>
          <img alt="" src="assets/3.jpeg" />
          <p className="legend">Exhaust work</p>
        </div>
        <div>
          <img alt="" src="assets/3.jpeg" />
          <p className="legend">Tune ups</p>
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;

// ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));

// Suspension work
// Engine diag
// Noise diag
// Brakes
// Vehicle maintenance
// Aftermarket parts install
// Lowering springs/ lift kits
// Exhaust work
// Tune ups
