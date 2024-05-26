import { useState } from 'react';
import './App.css';
import MyNavBar from './components/MyNavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import Contact from './components/Contact';
import APP_BACKGROUND from './constants/colors';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [darkMode,setDarkMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const toggleUiMode = ()=>{
    if(darkMode==='light'){
      document.body.style.backgroundColor = APP_BACKGROUND;
      setDarkMode('dark');
      showAlert(
        'Dark mode enabled',
        'dark'
      );
    }else{
      document.body.style.backgroundColor = 'white';
      setDarkMode('light');
      showAlert(
        'Dark mode disabled',
        'light'
      );
    }
  }

  const showAlert = (message,type) =>{
    setAlert({
      message:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  return (
        <BrowserRouter>
          <MyNavBar appName="TextUtils" uiMode={darkMode} toggleUiMode={toggleUiMode}/>
          <Alert alert={alert}/>
          <div className='container my-4'>
            <Routes>
              <Route path="/" element={<TextForm heading="Transform your text" uiMode={darkMode} showAlert={showAlert}/>}/> 
              <Route path="/about" element={<About/>}/> 
              <Route path="/contact" element={<Contact/>}/> 
            </Routes>
          </div> 
        </BrowserRouter>
  );
}

export default App;
