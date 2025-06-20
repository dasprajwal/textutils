import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  });

  const [btnText, setBtnText] = useState("Enable Light Mode");

  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        border: '2px solid white'
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '2px solid black'
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item’s accordion body.</strong> You can put anything here, and it will expand/collapse based on Bootstrap's collapse plugin.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item’s accordion body.</strong> Same styling and behavior apply here.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item’s accordion body.</strong> Customize this as needed.
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <button onClick={toggleStyle} className="btn btn-primary my-3">
          {btnText}
        </button>
      </div>
    </div>
  );
}
