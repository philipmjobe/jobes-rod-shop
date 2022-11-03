import { useEffect, useState } from "react";

const Carousel = () => {
  const data = [
    "Suspension work",
    "Engine diag",
    "Noise diag",
    "Brakes",
    "Vehicle maintenance",
    "Aftermarket parts install",
    "Lowering springs/ lift kits",
    "Exhaust work",
    "Tune ups",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);
    return () => clearInterval(interval);
  });
  return (
    <div className="carousel-container">
      {data.map((item, index) => {
        return (
          <h3 className="carousel-item" style={{ transform: `translate(-${currentIndex * 100}%)` }} key={index}>
            {item}
          </h3>
        );
      })}
    </div>
  );
};

export default Carousel;
