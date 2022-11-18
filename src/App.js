import jobesrodshop from "./assets/jobesrodshop.PNG";
import "./App.css";
import DarkVariantExample from "./components/Carousel.js";
import ContactForm from "./components/ContactForm.js";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="facebook-button">
          <MDBBtn
            className="m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="https://www.facebook.com/Jobesbustedrodshop"
          >
            <p>Find Us On Facebook</p>
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>
        </div>
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
