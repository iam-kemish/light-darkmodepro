
import React, { useState } from 'react'; 

export default function Form(props) {
    const HandleUpeercase = () => {
        console.log("UpperCase was clicked.")
        let newText = text.toUpperCase();
        props.showAlert("Upper cased letters")
      
        setText(newText);
        
    }
    const ClearAll = () => {
    setText(" ")
    props.showAlert("Texts were cleared.")
    }
    const handleOnChange = (event) => {
        console.log("Onchanged.")
        setText(event.target.value)

    }
    const setStorage = () => {
      localStorage.setItem("text", JSON.stringify(text));
      props.showAlert("Datas has been saved to local storage.")
    }
     const [text, setText] = useState(" ");
  return (
  <div>
      <div className="mb-3 my-3" style={{color: props.mode === "light"? "black":"white"}}>
        <h1>{props.heading}</h1>
    <label htmlfor="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="mb-3 my-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color: props.mode === "light"? "black":"white"}}>Example textarea</label>
    <textarea className="form-control" value={text}  id="exampleFormControlTextarea1" rows="11" onChange={handleOnChange}  style={{backgroundColor: props.mode === "light"? "white":"grey"}}></textarea>
    <button className="btn btn-primary mx-2 mt-3" onClick={HandleUpeercase}>Uppercase button</button>
    <button className="btn btn-outline-warning mt-3" onClick={ClearAll}>Clear</button>
    <button className="btn btn-success mt-3" style={{marginLeft: "8px"}} onClick={setStorage}>Save Datas</button>
  </div>
  <div className="container" style={{color: props.mode === "light"? "black":"white"}}><h2>Your text summary</h2></div>
  <p style={{color: props.mode === "light"? "black":"white"}}>Your text has {text.length} characters and {text.split(" ").length} words..</p>
  <p style={{color: props.mode === "light"? "black":"white"}}>{0.008 * (text.split(" ").length)} minutes read till now.</p>
  </div>
  )
}
