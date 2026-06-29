import React, {useState} from 'react'
import '../App.css';

export default function Textform(props) {
    const handleUpClick = () =>
 {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }

const handleOnChange = (event) =>
{
    console.log("On change");
    setText(event.target.value);
}

const handleLowClick = () =>
{
   console.log("Lowercase was clicked");
   let newText = text.toLowerCase();
   setText(newText);
}

const handleSpeakClick = () =>
{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
}

const handleClearClick =()=>
{
    let newText = '';
    setText(newText);
}

const handleSpaceClick =()=>
{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
}

const handleTogClick =()=>
{  
    let newText="";
   for (let ch of text){
    if (ch===ch.toUpperCase){
       newText+=ch.toLowerCase();
    }
    else{
        newText+=ch.toUpperCase();
    }
}
    setText(newText);
}

const [underline, setUnderline] = useState(false);

const handleUnderClick =()=>
{
    setUnderline(!underline);
};

  const [text, setText] = useState('');
  
  function article(Str){
    let count=0;
    for (let ch of Str){
        if("aeiouAEIOU".includes(ch)) {
      count++
    }
}
    return(
        count
    )
    
  }
  return (
    <><><div>
          <div className="container">
              <label htmlFor="floatingTextarea"> <h1>Enter your text here to analyze</h1></label>
              <textarea className="form-control" rows="8" value={text} id="MyBox" onChange={handleOnChange} style={{ textDecoration: underline ? "underline" : "none" }}></textarea>
          </div>
      </div><div className="button-container" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary" onClick={handleUpClick}>
                  Uppercase
              </button>
              <button type="button" className="btn btn-primary" onClick={handleLowClick}>
                  Lowercase
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSpeakClick}>
                  Speak
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClearClick}>
                  Clear space
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSpaceClick}>
                  Remove extra space
              </button>
              <button type="button" className="btn btn-primary" onClick={handleTogClick}>
                  Toggle
              </button>
              <button type="button" className="btn btn-primary" onClick={handleUnderClick}>
                  Underline text
              </button>

          </div></>
          
          <div className="container">
              <><h2>Summary of text</h2>
                  <p>{text === "" ? 0 : text.split(" ").length} words and {text.length} characters</p>
                  <p>Text takes {text === "" ? 0 : 0.008 * text.split(" ").length} minutes to read</p>
                  <p>Text has {article(text)} number of vowels.</p>
                  <p>Text has {text.length-article(text)} number of consonents.</p>
                  <h3>Preview of text</h3>
                  <p>{text}</p></>
          </div></>  
  )
} 













  