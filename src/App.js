import jobesrodshop from "./jobesrodshop.PNG";
import Card from "react-bootstrap/Card";
import "./App.css";
import background from "./pexels-mi.jpg";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
      <header className="App-header">
        <img src={jobesrodshop} className="App-logo" alt="logo" />
      </header>
      <body>
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
      </body>
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
