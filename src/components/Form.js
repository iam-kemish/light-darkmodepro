
import React, { useState } from 'react'; 

export default function Form(props) {
    const HandleUpeercase = () => {
        console.log("UpperCase was clicked.")
        let newText = text.toUpperCase();
      
        setText(newText);
        
    }
    const ClearAll = () => {
    setText(" ")
    }
    const handleOnChange = (event) => {
        console.log("Onchanged.")
        setText(event.target.value)

    }
     const [text, setText] = useState(" ");
  return (
  <div>
      <div className="mb-3 my-3">
        <h1>{props.heading}</h1>
    <label for="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="mb-3 my-3">
    <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
    <textarea className="form-control" value={text}  id="exampleFormControlTextarea1" rows="11" onChange={handleOnChange}></textarea>
    <button className="btn btn-primary mx-2 mt-3" onClick={HandleUpeercase}>Uppercase button</button>
    <button className="btn btn-outline-warning mt-3" onClick={ClearAll}>Clear</button>
  </div>
  <div className="container"><h2>Your text summary</h2></div>
  <p>Your text has {text.length} characters and {text.split(" ").length} words..</p>
  <p>{0.008 * (text.split(" ").length)} minutes read till now.</p>
  </div>
  )
}
