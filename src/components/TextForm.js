import React,{useState} from 'react'
import APP_BACKGROUND from '../constants/colors'

function TextForm(props) {
    const [text,setText] = useState('Enter your text here');

    function splitText(str){
        return str.trim().split(/[ ]+/);
    }

    const handleUpClick = ()=>{
        props.showAlert('Text converted to upper text','success');
        setText(text.toUpperCase());
    }

    const handleLowClick = ()=>{
        props.showAlert('Text converted to lower case','success');
        setText(text.toLowerCase());
    }

    const toggleText = ()=>{
        let newString = '';
        for (let index = 0; index < text.length; index++) {
            const character = text.charAt(index);
        
            if(character === character.toUpperCase())
                newString +=character.toLowerCase();
            else newString +=character.toUpperCase();
        }
        props.showAlert('Toggled text','success');
        setText(newString);
    }
    const formatText = ()=>{
        props.showAlert('Formatted text','success');
        setText(splitText(text).join(" "));
    }
    const clearText = ()=>{
        props.showAlert('Text cleared','info');
        setText('');
    }
    

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const textStyle = {
        color:props.uiMode==='dark'? 'white': 'black'
    }

  return (
    <>
    <div>
        <h1 style={textStyle}>{props.heading}</h1>
        <div className='my-3'>
            <textarea className='form-control'
             style={{backgroundColor: props.uiMode==='dark'? APP_BACKGROUND: 'white', color:props.uiMode==='dark'? 'white': 'black'}}
             id='myBox' onChange={handleOnChange} 
             rows={8} value={text}></textarea>
        </div>
        <button className={`btn m-2 btn-${props.uiMode}`} onClick={handleUpClick}>Convert to UpperCase</button>
        <button className={`btn m-2 btn-${props.uiMode}`} onClick={handleLowClick}>Convert to LowerCase</button>
        <button className={`btn m-2 btn-${props.uiMode}`} onClick={toggleText}>Toggle Text</button>
        <button className={`btn m-2 btn-${props.uiMode}`} onClick={formatText}>Format Text</button>
        <button className={`btn m-2 btn-${props.uiMode}`} onClick={clearText}>Clear</button>

    </div>
    <div className={`container my-3 text-${props.uiMode==='dark'? 'light': 'dark'}`}>
        <h3>Your text summary</h3>
        <p>{splitText(text).length} words and {text.trim().length} characters</p>
        <p style={textStyle}>{0.008 * splitText(text).length} minutes to read</p>
    </div>
    </>
  );
}

export default TextForm