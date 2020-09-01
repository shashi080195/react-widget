import React, { useState } from "react";

function DemoComponent(props) {
  const [buttonText, setButtonText] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={() => setButtonText(!buttonText)}
        style={{
          width: "40%",
          padding: "5px",
          backgroundColor: "#3366cc",
          color: "#fff",
          fontSize: "0.7em",
        }}
      >
        {buttonText ? "TRUE" : "FALSE"}
      </button>
    </div>
  );
}

export default DemoComponent;
