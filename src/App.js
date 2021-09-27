//import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react'
import Alert from "./components/Alert";
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";*/


function App(){
  const [mode, setMode] = useState('light'); //dark mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= 'black';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white'
      showAlert("Light mode has been enabled", "success");
    }

  }
  return (
    <>
  {/*<Router>*/}
  <Navbar title = "Textutils" mode= {mode} toggleMode= {toggleMode} />
  <Alert alert= {alert}/>
  <div className= "container my-3">
  
  {/*<Switch>*/}
    {/*}      <Route exact path="/about">
          <About/>
  </Route>*/}
          
          {/*<Route exact path="/">*/}
          <Textform showAlert= {showAlert} heading = "Enter the text to analyse" mode= {mode}/>
         {/* </Route>*/}
  {/*</Switch>*/}
  </div>
  {/*</Router>*/}
  
  </>
  );
}

export default App;
