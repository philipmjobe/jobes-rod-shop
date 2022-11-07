import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class Gallery extends React.Component {
  render() {
    return (
      <div>
        <h2>My Photo Gallery</h2>
        <Carousel autoPlay interval="5000" transitionTime="5000" infiniteLoop>
          <div>
            <img
              src="https://images.unsplash.com/photo-1613214150384-14921ff659b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwYnJha2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
            <p className="legend">Brakes</p>
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/614PStckvrL.jpg" alt="" />
            <p className="legend">Engine diagnosis</p>
          </div>
          <div>
            <img
              src="https://www.racedandrallied.com/sites/default/files/styles/medium/public/blog-images/diagnostic-engine.jpg?itok=VNHDEZV-"
              alt=""
            />
            <p className="legend">Noise diagnosis</p>
          </div>
          <div>
            <img
              src="https://i0.wp.com/studentlesson.com/wp-content/uploads/2020/11/shock-absorber-types.jpg?fit=1000%2C667&ssl=1"
              alt=""
            />
            <p className="legend">Suspension work</p>
          </div>
          <div>
            <img
              src="https://empire-s3-production.bobvila.com/slides/35725/vertical_slide_wide/car_maintenance_tips.jpeg?1580844350"
              alt=""
            />
            <p className="legend">Vehicle maintenance</p>
          </div>
          <div>
            <img src="https://www.kbb.com/wp-content/uploads/2022/09/istock-car-parts.jpg" alt="" />
            <p className="legend">Aftermarket parts install</p>
          </div>
          <div>
            <img src="https://www.motortrend.com/uploads/sites/21/2015/09/Fotor0811112647.jpg" alt="" />
            <p className="legend">Lowering springs/ lift kits</p>
          </div>
          <div>
            <img src="https://www.parkmuffler.com/wp-content/uploads/2019/11/shutterstock_1812125107.jpg" alt="" />
            <p className="legend">Exhaust work</p>
          </div>
          <div>
            <img
              src="https://importcarcenter.com/wp-content/uploads/2020/05/Signs-of-Failing-Spark-Plugs-and-That-Its-Time-for-Auto-Repair-_-Grapevine-TX-1200x900.jpg"
              alt=""
            />
            <p className="legend">Tune ups</p>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default Gallery;
// Suspension work
// Engine diag
// Noise diag
// Brakes
// Vehicle maintenance
// Aftermarket parts install
// Lowering springs/ lift kits
// Exhaust work
// Tune ups
