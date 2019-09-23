import React from "react";
import ReactDOM from "react-dom";
import Snaplifts from "./components/Snaplifts";
import Snap from "./components/Snap"
import Footer from "./components/footer"
import "./styles.scss";


function App() {
  return (
    <div className="App">
      {/* <Snaplifts /> */}
      <Snap />
      <Footer />
    </div>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
