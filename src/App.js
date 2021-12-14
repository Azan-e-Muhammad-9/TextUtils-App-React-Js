import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";





import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import Alert from './componenets/Alert';
import About from './componenets/About';
import Footer from './componenets/Footer';

function App() {

 

  const [mode,changeMode]=useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert=(msg,type)=>{

    setAlert({

      message:msg,
      type:type
    });

    setTimeout(() => {
      
      setAlert(null);
    }, 1500);
  }



  const toggleMode=()=>{

    
    if(mode==='dark')
    {
      changeMode('light');
      document.body.style.backgroundColor='#ced4da';
      showAlert("light mode enabled","success");
    }  
    else
    {
      
      changeMode('dark');
      document.body.style.backgroundColor='#111';
      showAlert("dark mode enabled","success");
    }
  }




  return (

    
    <>
<Router>

     <Navbar title="TextUtils" About="About Us" mode={mode} toggleMode={toggleMode}/>
     
    <Alert alert={alert}/>

     <div className="container">



     <Routes>

            <Route exact path="/about" element={<About mode={mode} />}/>
            <Route exact path="/" element={ <TextForm heading="Text Analysis Box" mode={mode}  showAlert={showAlert}/>} />



     </Routes>
     </div>
     
     <Footer mode={mode}/>
    
     
</Router>

     </>
  );
}

export default App;
