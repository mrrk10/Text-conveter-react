import React, { useState } from "react";

export const TextArea = (props) => {
  const [text, setText] = useState("Enter text here");
  const [string,setString]=useState(true)

  const handleChange=(e)=>{ 
    setText(e.target.value)
  }

  const handleUpClick=(e)=>{
    // console.log("clicked ")
    if(string){ 
        setText(text.toUpperCase()) 
        props.alerthandle("Changed to uppercase") 
    }
    else{
        setText(text.toLowerCase())
        props.alerthandle("Changed to uppercase") 
    }
    setString(!string);
  }

  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    // text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.alerthandle("text copied") 


  }

  // const handleSpace=()=>{
  //  let newText=text.split(/[ ]+/);
  //   setText(newText.join(""))
  // }

  const handleClrClick=()=>{
    setText("")
    props.alerthandle("text cleared");
    
  }

// // set to localStorage

// useEffect(() => {
//   localStorage.setItem('text', JSON.stringify(text));
// }, [text]);

// // get from local storage
// useEffect(() => {
//   const text = JSON.parse(localStorage.getItem('text'));
//   if (text) {
//      setText(text);
//   }
// }, []);


  return (
    <>
      <div className="form-group" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="myBox"
            rows="12"
            value={text}
            onChange={handleChange}
            style={{background:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Change</button>
        <button className="btn btn-primary mx-3  my-3 " onClick={handleClrClick}>Clear</button>
        <button className="btn btn-primary mx-3  my-3" onClick={handleCopy}>Copy Text</button>
        {/* <button className="btn btn-primary mx-3 " onClick={handleSpace}>Space handle</button> */}

      </div>

      <div className="container my-6" style={{color:props.mode==='dark'?'white':'black'}}
      >
        <h3>Total words</h3>
        {text.length===0? text.length:text.split(" ").filter((elem)=>{return elem!=0}).length}
        <h3>Total characters</h3>
        <p>{text.split(" ").filter((elem)=>{return elem!=0}).length?text.length:0}</p>
        <h3>Duration to read</h3>
        <p>{text.length>0?0.08*text.split(" ").filter((elem)=>{return elem!=0}).length:0.00}</p>

        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter text for preview'}</p>
      </div>
    </>
  );
};
