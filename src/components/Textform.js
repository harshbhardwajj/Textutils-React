import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    //console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleExtraspaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Copied to clipboard", "success");
  };

  const handleOnChange = (event) => {
    //console.log(" On change");
    setText(event.target.value);
  };
  const [text, setText] = useState(""); //hooks
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'black' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          {" "}
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          {" "}
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          {" "}
          Clear text{" "}
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraspaces}>
          {" "}
          Clear spaces{" "}
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h2> Your text summary</h2>
        <p>
          <b>{text.split(" ").length}</b> <i>words</i> and <b>{text.length}</b>{" "}
          <i>characters</i>{" "}
        </p>
        <p> {0.008 * text.split(" ").length} Minutes read </p>
        <h2> Preview </h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
    </>
  );
}
