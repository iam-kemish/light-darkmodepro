

import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import { useState } from 'react';

import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


// import { Slay } from './Slay';

function App() {
  const[mode, setmode] = useState("light");
  const[alert, setAlert] = useState(null);
 const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
   setAlert(null)
  }, 1407);
 }
  const toggleMode = () => {
    if(mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("success","Dark mode has been enabled.")
    }else {
      setmode("light")
      document.body.style.backgroundColor = "white"
      showAlert("success", "light mode has been enabled.")
    }
    
  }
  return (
    <>
     
    <BrowserRouter>
    <Navbar title="TextUtils" homeText="Home" AboutText= "About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route path="/" element={  <Form heading = "Enter your text here" mode={mode} showAlert={showAlert}/>  } />
        <Route path="about" element={ <About/> } />
     
      </Routes>
        </div>
    </BrowserRouter>
   
    
  
    </>
  )

}


export default App;
