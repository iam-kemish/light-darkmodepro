import React, { useState } from "react";

export default function Form(props) {

  const [texts, setTexts] = useState("");
  const [input, setInput] = useState({
    email: "",
    text: "",
  });

  const HandleUpeercase = () => {
    if (!input.text) {
      alert("atleast one word/char is required");
    } else {
      props.showAlert("Upper cased letters");
      setInput({ ...input, text: input.text.toUpperCase() });
    }
  };
  const ClearAll = () => {
    props.showAlert("Texts were cleared.");
    setInput({ ...input, text: "" });
  };

  const setStorage = () => {
    if (!input.email || !input.text) {
      alert("Fill the details.");
    } else {
      localStorage.setItem("input", JSON.stringify(input));
      props.showAlert("Datas has been saved to local storage.");
    }
    setInput({
      email: "",
      text: "",
    });
  };
  const countWords = () => {
    if (!input.text) {
      alert("Type atleast one char/word.");
  
    } else {
      setTexts(input.text);
      setShowModal(true);
    }
  };

  return (
    <div>
      <div
        className="mb-3 my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
      </div>
      <div className="mb-3 my-3">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          Example textarea
        </label>
        <textarea
          className="form-control"
          value={input.text}
          name="text"
          id="exampleFormControlTextarea1"
          rows="11"
          onChange={(e) => setInput({ ...input, text: e.target.value })}
          style={{ backgroundColor: props.mode === "light" ? "white" : "grey" }}
        ></textarea>
        <button className="btn btn-primary mx-2 mt-3" onClick={HandleUpeercase}>
          Uppercase button
        </button>
        <button className="btn btn-outline-warning mt-3" onClick={ClearAll}>
          Clear
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 mt-3"
          data-bs-toggle={input.text? "modal" : ""}
          data-bs-target="#exampleModal"
          onClick={countWords}
        >
          Count words
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="modal-body"  style={{
          color: props.mode === "light" ? "black" : "white",
          fontWeight: "bold",
        }}>
                  You have {texts.length}{" "}
                  {texts.length > 1 ? "characters" : "character"} and{" "}
                  {texts.split(/\s+/).filter(Boolean).length}{" "}
                  {texts.split(/\s+/).filter(Boolean).length > 1
                    ? "words"
                    : "word"}
                  .
                </div>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>

        <button
          className="btn btn-success mt-3"
          style={{ marginLeft: "8px" }}
          onClick={setStorage}
        >
          Save Datas
        </button>
      </div>
      
     
    </div>
  );
}
