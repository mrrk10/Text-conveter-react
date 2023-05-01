import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { TextArea } from './components/TextArea';
import Success from './components/Success';
import { About } from './components/About';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

const alerthandle=(msg)=>{
  setAlert(msg);
  setTimeout(() => {
    setAlert(null);
}, 4000);
  
}


  

  const toggleMode=(e)=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40'
      alerthandle("Dark mode enabled");
     

     
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white';
      alerthandle("dark mode disabled")

    }
  }
  return (
    <>
    <Router>

    
    <Navbar title="TextUtils" about="About Textutils" home="Home" mode={mode} toggleMode={toggleMode}/>
    <Success alert={alert}/>
    <div className="container my-5" >
    <Routes>
    <Route exact path="/about" element={ <About/>}>
     
    </Route>
    <Route exact path="/" element={<TextArea heading="Text Conversion" mode={mode} alerthandle={alerthandle}/> }>
    


    </Route>

    </Routes>
   
    </div>
    </Router>

    
    
    </>
  );
}

export default App;
