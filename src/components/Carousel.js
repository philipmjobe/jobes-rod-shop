import React from "react";

import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="brakes"
          src="https://images.unsplash.com/photo-1613214150384-14921ff659b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwYnJha2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Brakes</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ae01.alicdn.com/kf/Hd7bcfca587194b0fa4833ef7fe7b4d16C.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Engine diagnosis</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=e5e5e5" alt="Third slide" />
        <Carousel.Caption>
          <h5>Noise diagnosis</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=e5e5e5" alt="Third slide" />
        <Carousel.Caption>
          <h5>Suspension work</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=e5e5e5" alt="Third slide" />
        <Carousel.Caption>
          <h5>Vehicle maintenance</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=e5e5e5" alt="Third slide" />
        <Carousel.Caption>
          <h5>Aftermarket parts install</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=e5e5e5" alt="Third slide" />
        <Carousel.Caption>
          <h5>Lowering springs/ lift kits</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=e5e5e5" alt="Third slide" />
        <Carousel.Caption>
          <h5>Exhaust work</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=e5e5e5" alt="Third slide" />
        <Carousel.Caption>
          <h5>Tune ups</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
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
