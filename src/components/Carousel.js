import React from "react";
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from "@coreui/react";

function DemoCarousel() {
  return (
    <CCarousel>
      <CCarouselItem>
        <CImage className="d-block w-100" src="/images/react.jpg" alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="/images/vue.jpg" alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="/images/angular.jpg" alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
  );
}

export default DemoCarousel;

// Suspension work
// Engine diag
// Noise diag
// Brakes
// Vehicle maintenance
// Aftermarket parts install
// Lowering springs/ lift kits
// Exhaust work
// Tune ups
