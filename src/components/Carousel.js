import React from "react";

function DarkVariantExample() {
  return (
    <div id="carouselExampleControls" class="carousel slide relative flex-auto" data-bs-ride="carousel">
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active relative float-left w-full object-fill">
          <h1>Brakes</h1>

          <img
            src="https://images.unsplash.com/photo-1613214150384-14921ff659b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwYnJha2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            class="block w-full"
            alt="Brakes"
          />

          <h2>All Prices Vary On Parts And Labor</h2>
        </div>
        <div class="carousel-item relative float-left w-full">
          <h1>Engine diagnosis</h1>
          <img
            src="https://ae01.alicdn.com/kf/Hd7bcfca587194b0fa4833ef7fe7b4d16C.jpg"
            class="block w-full"
            alt="Engine Diagnosis"
          />
          <h2>All Prices Vary On Parts And Labor</h2>
        </div>
        <div class="carousel-item relative float-left w-full">
          <h1>Noise diagnosis</h1>
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwZW5naW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            class="block w-full"
            alt="Noise Diagnosis"
          />
          <h2>All Prices Vary On Parts And Labor</h2>
        </div>
        <div class="carousel-item relative float-left w-full">
          <h1>Suspension work</h1>
          <img
            src="https://images.unsplash.com/photo-1640021042525-5610f9f75444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwc3VzcGVuc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            class="block w-full"
            alt="Suspension work"
          />
          <h2>All Prices Vary On Parts And Labor</h2>
        </div>
        <div class="carousel-item relative float-left w-full">
          <h1>Vehicle Maintenance</h1>
          <img
            src="https://www.kbb.com/wp-content/uploads/2021/08/car-maintenance-guide.jpeg?w=763"
            class="block w-full"
            alt="Vehicle Maintenance"
          />
          <h2>All Prices Vary On Parts And Labor</h2>
        </div>
        <div class="carousel-item relative float-left w-full">
          <h1>Aftermarket Parts Install</h1>
          <img
            src="https://di-uploads-pod1.dealerinspire.com/mercedesbenzofmilwaukeenorth/uploads/2019/01/Mercedes-Benz-of-Milwaukee-North-Parts-FAQ.jpg"
            class="block w-full"
            alt="Aftermarket Parts Install"
          />
          <h2>All Prices Vary On Parts And Labor</h2>
        </div>
        <div class="carousel-item relative float-left w-full">
          <h1>Lift Kits</h1>
          <img
            src="https://www.4wheelparts.com/the-dirt/wp-content/uploads/sites/3/2020/03/big-tires-rub.jpeg"
            class="block w-full"
            alt="Lift Kits"
          />
          <h2>All Prices Vary On Parts And Labor</h2>
        </div>
        <div class="carousel-item relative float-left w-full">
          <h1>Exhaust Work</h1>
          <img src="https://www.vividracing.com/wm.php/images/49-36609_5.jpg" class="block w-full" alt="Exhaust Work" />
          <h2>All Prices Vary On Parts And Labor</h2>
        </div>
        <div class="carousel-item relative float-left w-full">
          <h1>Tune Ups</h1>
          <img
            src="https://repairsmith-prod-wordpress.s3.amazonaws.com/2022/03/iStock-1128875301-1.jpg"
            class="block w-full"
            alt="Tune Ups"
          />
          <h2>All Prices Vary On Parts And Labor</h2>
        </div>
        <div class="carousel-item relative float-left w-full">
          <h1>Lowering Springs</h1>
          <img
            src="https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/05/5.-2013-Ford-F-150-FX2-e1589558717128.jpg"
            class="block w-full"
            alt="Lowering Springs"
          />
          <h2>All Prices Vary On Parts And Labor</h2>
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    // <Carousel
    //   variant="dark"
    //   style={{ width: "800px", marginLeft: "auto", marginRight: "auto", controls: "false", display: "flex" }}
    // >
    //   <Carousel.Item>
    //     <h1>Brakes</h1>
    //     <img
    //       className="brakes"
    //       src="https://images.unsplash.com/photo-1613214150384-14921ff659b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwYnJha2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    //       alt="First slide"
    //     />

    //     {/* <Carousel.Caption></Carousel.Caption> */}
    //     <h2>All Prices Vary On Parts And Labor</h2>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <h1>Engine diagnosis</h1>
    //     <img
    //       className="d-block w-100"
    //       src="https://ae01.alicdn.com/kf/Hd7bcfca587194b0fa4833ef7fe7b4d16C.jpg"
    //       // style={{ height: 750.47, width: 500 }}
    //       alt="Second slide"
    //     />
    //     {/* <Carousel.Caption></Carousel.Caption> */}
    //     <h2>All Prices Vary On Parts And Labor</h2>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <h1>Noise diagnosis</h1>
    //     <img
    //       className="d-block w-100"
    //       src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwZW5naW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    //       alt="Third slide"
    //     />
    //     {/* <Carousel.Caption></Carousel.Caption> */}
    //     <h2>All Prices Vary On Parts And Labor</h2>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <h1>Suspension work</h1>
    //     <img
    //       className="d-block w-100"
    //       src="https://images.unsplash.com/photo-1640021042525-5610f9f75444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwc3VzcGVuc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    //       alt="Third slide"
    //     />
    //     {/* <Carousel.Caption></Carousel.Caption> */}
    //     <h2>All Prices Vary On Parts And Labor</h2>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <h1>Vehicle maintenance</h1>
    //     <img
    //       className="d-block w-100"
    //       src="https://www.kbb.com/wp-content/uploads/2021/08/car-maintenance-guide.jpeg?w=763"
    //       alt="Third slide"
    //     />
    //     {/* <Carousel.Caption></Carousel.Caption> */}
    //     <h2>All Prices Vary On Parts And Labor</h2>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <h1>Aftermarket parts install</h1>
    //     <img
    //       className="d-block w-100"
    //       src="https://di-uploads-pod1.dealerinspire.com/mercedesbenzofmilwaukeenorth/uploads/2019/01/Mercedes-Benz-of-Milwaukee-North-Parts-FAQ.jpg"
    //       alt="Third slide"
    //     />
    //     {/* <Carousel.Caption></Carousel.Caption> */}
    //     <h2>All Prices Vary On Parts And Labor</h2>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <h1>Lift kits</h1>
    //     <img
    //       className="d-block w-100"
    //       src="https://www.4wheelparts.com/the-dirt/wp-content/uploads/sites/3/2020/03/big-tires-rub.jpeg"
    //       alt="Third slide"
    //     />
    //     {/* <Carousel.Caption></Carousel.Caption> */}
    //     <h2>All Prices Vary On Parts And Labor</h2>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <h1>Exhaust work</h1>
    //     <img
    //       className="d-block w-100"
    //       src="https://www.vividracing.com/wm.php/images/49-36609_5.jpg"
    //       alt="Third slide"
    //     />
    //     {/* <Carousel.Caption></Carousel.Caption> */}
    //     <h2>All Prices Vary On Parts And Labor</h2>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <h1>Tune ups</h1>
    //     <img
    //       className="d-block w-100"
    //       src="https://repairsmith-prod-wordpress.s3.amazonaws.com/2022/03/iStock-1128875301-1.jpg"
    //       alt="Third slide"
    //     />
    //     {/* <Carousel.Caption></Carousel.Caption> */}
    //     <h2>All Prices Vary On Parts And Labor</h2>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <h1>Lowering springs</h1>
    //     <img
    //       className="d-block w-100"
    //       src="https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/05/5.-2013-Ford-F-150-FX2-e1589558717128.jpg"
    //       alt="Third slide"
    //     />
    //     {/* <Carousel.Caption>
    //       <h2>All Prices Vary On Parts And Labor</h2>
    //     </Carousel.Caption> */}
    //     <h2>All Prices Vary On Parts And Labor</h2>;
    //   </Carousel.Item>
    // </Carousel>
  );
}

export default DarkVariantExample;
