import { useState } from 'react';
import './App.css';
import MyNavBar from './components/MyNavBar';
import TextForm from './components/TextForm';
import APP_BACKGROUND from './constants/colors';

function App() {

  const [darkMode,setDarkMode] = useState('light');

  const toggleUiMode = ()=>{
    document.body.style.backgroundColor = darkMode==='light'? APP_BACKGROUND:'white';
    setDarkMode(darkMode==='dark'?'light':'dark');
  }

  return (
    <>
      <MyNavBar appName="Text Utils" uiMode={darkMode} toggleUiMode={toggleUiMode}/>
     <div className='container my-3'>
        <TextForm heading="Transform your text" uiMode={darkMode}/>
      </div>
    </>
  );
}

export default App;
