import React from "react";

import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <Carousel variant="dark" style={{ width: "800px", marginLeft: "auto", marginRight: "auto" }} indicators="false">
      <Carousel.Item>
        <h1>Brakes</h1>
        <img
          className="brakes"
          src="https://images.unsplash.com/photo-1613214150384-14921ff659b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwYnJha2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="First slide"
        />

        {/* <Carousel.Caption></Carousel.Caption> */}
        <h2>All Prices Vary On Parts And Labor</h2>
      </Carousel.Item>
      <Carousel.Item>
        <h1>Engine diagnosis</h1>
        <img
          className="d-block w-100"
          src="https://ae01.alicdn.com/kf/Hd7bcfca587194b0fa4833ef7fe7b4d16C.jpg"
          // style={{ height: 750.47, width: 500 }}
          alt="Second slide"
        />
        {/* <Carousel.Caption></Carousel.Caption> */}
        <h2>All Prices Vary On Parts And Labor</h2>
      </Carousel.Item>
      <Carousel.Item>
        <h1>Noise diagnosis</h1>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwZW5naW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="Third slide"
        />
        {/* <Carousel.Caption></Carousel.Caption> */}
        <h2>All Prices Vary On Parts And Labor</h2>
      </Carousel.Item>
      <Carousel.Item>
        <h1>Suspension work</h1>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1640021042525-5610f9f75444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwc3VzcGVuc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Third slide"
        />
        {/* <Carousel.Caption></Carousel.Caption> */}
        <h2>All Prices Vary On Parts And Labor</h2>
      </Carousel.Item>
      <Carousel.Item>
        <h1>Vehicle maintenance</h1>
        <img
          className="d-block w-100"
          src="https://www.kbb.com/wp-content/uploads/2021/08/car-maintenance-guide.jpeg?w=763"
          alt="Third slide"
        />
        {/* <Carousel.Caption></Carousel.Caption> */}
        <h2>All Prices Vary On Parts And Labor</h2>
      </Carousel.Item>
      <Carousel.Item>
        <h1>Aftermarket parts install</h1>
        <img
          className="d-block w-100"
          src="https://di-uploads-pod1.dealerinspire.com/mercedesbenzofmilwaukeenorth/uploads/2019/01/Mercedes-Benz-of-Milwaukee-North-Parts-FAQ.jpg"
          alt="Third slide"
        />
        {/* <Carousel.Caption></Carousel.Caption> */}
        <h2>All Prices Vary On Parts And Labor</h2>
      </Carousel.Item>
      <Carousel.Item>
        <h1>Lift kits</h1>
        <img
          className="d-block w-100"
          src="https://www.4wheelparts.com/the-dirt/wp-content/uploads/sites/3/2020/03/big-tires-rub.jpeg"
          alt="Third slide"
        />
        {/* <Carousel.Caption></Carousel.Caption> */}
        <h2>All Prices Vary On Parts And Labor</h2>
      </Carousel.Item>
      <Carousel.Item>
        <h1>Exhaust work</h1>
        <img
          className="d-block w-100"
          src="https://www.vividracing.com/wm.php/images/49-36609_5.jpg"
          alt="Third slide"
        />
        {/* <Carousel.Caption></Carousel.Caption> */}
        <h2>All Prices Vary On Parts And Labor</h2>
      </Carousel.Item>
      <Carousel.Item>
        <h1>Tune ups</h1>
        <img
          className="d-block w-100"
          src="https://repairsmith-prod-wordpress.s3.amazonaws.com/2022/03/iStock-1128875301-1.jpg"
          alt="Third slide"
        />
        {/* <Carousel.Caption></Carousel.Caption> */}
        <h2>All Prices Vary On Parts And Labor</h2>
      </Carousel.Item>
      <Carousel.Item>
        <h1>Lowering springs</h1>
        <img
          className="d-block w-100"
          src="https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/05/5.-2013-Ford-F-150-FX2-e1589558717128.jpg"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h2>All Prices Vary On Parts And Labor</h2>
        </Carousel.Caption> */}
        <h2>All Prices Vary On Parts And Labor</h2>;
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;

// Suspension work
// Engine diag
// Noise diag
// Brakes
// Vehicle maintenance
// Aftermarket parts install
// Lowering springs/ lift kits
// Exhaust work
// Tune ups
