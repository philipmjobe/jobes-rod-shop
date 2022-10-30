import jobesrodshop from "./jobesrodshop.jpeg";
import Card from "react-bootstrap/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={jobesrodshop} className="App-logo" alt="logo" />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Card style={{ width: "70rem" }}>
          <Card.Body>
            <Card.Title>Abilities:</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
            <Card.Text>
              <ul>
                <li>Suspension work</li>
                <li>Engine diagnosis</li>
                <li>Noise diagnosis</li>
                <li>Brakes</li>
                <li>Vehicle maintenance</li>
                <li>Aftermarket parts install</li>
                <li>Lowering springs/ lift kits</li>
                <li>Exhaust work</li>
                <li>Tune ups</li>
              </ul>
            </Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
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
