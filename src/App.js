import React from "react";
import logo from "./logo192.png";
import "./App.css";
import DemoComponent from "./DemoComponent";

function App(props) {
  const { width, height } = props.config;
  return (
    <div
      className="App"
      style={{
        boxShadow: "10px 20px 30px rgba(0,0,0,0.5)",
        width: width,
        height: height,
      }}
    >
      <DemoComponent />
    </div>
  );
}

export default App;
