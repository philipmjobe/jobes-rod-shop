import jobesrodshop from "./assets/jobesrodshop.PNG";
import "./App.css";
import DarkVariantExample from "./components/Carousel.js";
import ContactForm from "./components/ContactForm.js";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { MDBFooter } from "mdb-react-ui-kit";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="phone-number">
          <p>Give Me a Call at (740)507-2522</p>
          <p>Or Send Me an Email at djobe901@yahoo.com</p>
        </div>
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
      <br />
      <br />
      <ContactForm />
      <MDBFooter bgColor="light" className="text-center text-lg-left">
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-dark" href="https://philipmjobe.github.io/">
            Created By Philip Jobe Check Me Out Here
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default App;
