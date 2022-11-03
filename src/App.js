import jobesrodshop from "./jobesrodshop.PNG";
import Card from "react-bootstrap/Card";
import "./App.css";
import background from "./pexels-mi.jpg";
import Carousel from "./components/Carousel.js";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
      <header className="App-header">
        <img src={jobesrodshop} className="App-logo" alt="logo" />
        <Carousel>
          <div className="carousel-container">
            <div className="carousel-item">
              <h3>Item 1</h3>
            </div>
            <div className="carousel-item">
              <h3>Item 2</h3>
            </div>
            <div className="carousel-item">
              <h3>Item 3</h3>
            </div>
            <div className="carousel-item">
              <h3>Item 4</h3>
            </div>
            <div className="carousel-item">
              <h3>Item 5</h3>
            </div>
            <div className="carousel-item">
              <h3>Item 6</h3>
            </div>
            <div className="carousel-item">
              <h3>Item 7</h3>
            </div>
            <div className="carousel-item">
              <h3>Item 8</h3>
            </div>
            <div className="carousel-item">
              <h3>Item 9</h3>
            </div>
          </div>
        </Carousel>
      </header>
    </div>
  );
}

export default App;

// Suspension work
// Engine diag
// Noise diag
// Brakes
// Vehicle maintenance
// Aftermarket parts install
// Lowering springs/ lift kits
// Exhaust work
// Tune ups
