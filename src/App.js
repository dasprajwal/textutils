
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light')// whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#0b0c1a';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Navbar  title="TextUtils" AboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
     <TextForm showAlert={showAlert} heading="Enter the text to anaylse below" mode={mode}/>
     {/* <About/> */}
    </div>


    </>
    
  );
}

export default App;
