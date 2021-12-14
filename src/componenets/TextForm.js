import React,{useState} from  'react'



export default function TextForm(props) {

    function displayAlert(msg,type)
    {
        if(text.length===0)
         props.showAlert("No text found!!!","warning");
         else
         props.showAlert(msg,type);

    }

    const upperCaseHandler=()=>{

        let newText=text.toUpperCase();

            textChange(newText);

            displayAlert("Converted to upperCase!",'success')
            
            
            
        }
        
        const lowerCaseHandler=()=>{
            
            let newText=text.toLowerCase();
            
            textChange(newText);
            
            displayAlert("Converted to lowerCase!",'success')
        }
        
        const textChangeHandler=(event)=>{
            
            textChange(event.target.value);
            
    }

    const clearText=()=>{
        textChange('');
        displayAlert("Text cleared",'success');
    }

    const copyText=()=>{

     
        navigator.clipboard.writeText(text);
        displayAlert("Text copied",'success');

    }
    const removeExtraSpace=()=>{

        let newText=text.split(/[ ]+/);
        textChange(newText.join(" "));
        displayAlert("Extra spaces removed",'success');
    }


    const toCamelCase = ()=> {
        textChange( text
            .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
            .replace(/\s/g, '')
            .replace(/^(.)/, function($1) { return $1.toLowerCase(); }));

            displayAlert("Text Converted to camelCase",'success');
    }


    const [text,textChange]=useState("")

    const darkBackgroundStyle={
        backgroundColor:'#111',
        color:'white',
        border:'4px solid red'

    };
   
    const lightBackgroundStyle=
        {
            backgroundColor:'#ced4da',
            color:'black',
            border:'4px solid black'
        };
    
 
        function countWords()
        {
 

            return text.split(/\s+/).filter((value)=>{return value.length!==0}).length;
    
        }



    return (
        <>

                <div className={`container  text-${props.mode==='light'?'dark':'light'} `}>
                    

                            <div className="mb-3 my-5">
                                
                                    <h1 className="my-3">{props.heading}</h1>
                                    <textarea className="form-control" id="textBox" rows="8" placeholder="Enter the text" 
                                    style={props.mode==='light'?lightBackgroundStyle:darkBackgroundStyle} onChange={textChangeHandler} value={text}></textarea>

                            
                                    <button className="btn btn-primary my-2 mx-1"  onClick={upperCaseHandler}  >Convert to UpperCase</button>
                                    <button className="btn btn-danger my-2 mx-1" onClick={lowerCaseHandler}>Convert to LowerCase</button>
                                    <button className="btn btn-dark my-2 mx-1"  onClick={removeExtraSpace}>Remove Extra Spaces</button>
                                    <button className="btn btn-warning my-2 mx-1 "  onClick={copyText}>Copy to clipboard</button>
                                    <button className="btn btn-success my-2 mx-1 "  onClick={clearText}>Clear Text</button>
                                    <button className="btn btn-secondary my-2 mx-1  "  onClick={toCamelCase}>Convert to camelCase</button>
                            
                            
                            </div>

                </div>

                <div className={`container  text-${props.mode==='light'?'dark':'light'} `}>

                <h3 className="my-2">Your text Summary</h3>
                <p className="my-0">No of Words: {countWords()}</p>
                <p >No of Characters: {text.length}</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Enter something in the above box to preview"}</p>

                

                </div>
        </>
    )
}


