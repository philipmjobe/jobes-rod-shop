import jobesrodshop from "./assets/jobesrodshop.PNG";
import "./App.css";
import background from "./assets/pexels-mi.jpg";
import DarkVariantExample from "./components/Carousel.js";
import ContactForm from "./components/ContactForm.js";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
      <header className="App-header">
        <img src={jobesrodshop} className="App-logo" alt="logo" />
      </header>
      <DarkVariantExample />
      <ContactForm />
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
