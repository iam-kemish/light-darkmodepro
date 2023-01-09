

import './App.css';
import Navbar from './components/Navbar';
// import Form from './components/Form';
import About from './components/About';


// import { Slay } from './Slay';

function App() {
  return (
    <>
     
      <Navbar title="TextUtils" homeText="Home" AboutText= "About TextUtils" />
      <div className="container my-3">
      {/* <Form heading = "Enter your text here"/> */}
      
      </div>
      <About/>
    
  
    </>
  )

}


export default App;
