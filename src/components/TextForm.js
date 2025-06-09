import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoclick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerrcase", "success");
  };
  const handleclick = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };
  const handlecopy = () => {
    var copyText = document.getElementById("myBox");

    // Select the text field
    copyText.select();
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text Copied to clipboard", "success");
  };
  
  const handlespaces = () => {
    let newText = Text.split(/[ ]+/).join(" ");
    setText(newText.trim());
    props.showAlert("Extra Spaces removed ", "success");

  };

  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const [Text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={handleonChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-2" onClick={handlespaces}>
          Remove spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>your text summary</h2>
        <p>
          {Text.split(" ").length} words and {Text.length} characters
        </p>
        <p>{0.008 * Text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:'Enter something in the text above to preview it'}</p>
      </div>
    </>
  );
}
