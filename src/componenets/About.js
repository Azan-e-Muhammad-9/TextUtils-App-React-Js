import React from 'react'

export default function About(props) {


    let myStyle={

        color: props.mode==='light'?'black':'white',
        backgroundColor: props.mode==='light'?'#ced4da':'#111',
        border: props.mode==='light'?'2px solid black':'2px solid red'
    }

    let titleStyle={

        color: props.mode==='light'?'black':'white',
    }
    let subHeadingStyle={

      color: props.mode==='light'?'black':'#ff6347'
    }

    return (
<>

        <h1 style={titleStyle} className='text-center'>About Us</h1>
        <div className = "accordion container my-5 "  id="accordionExample">
        <div className="accordion-item"  style={{border:'none'}}>
          <h2 className="accordion-header" id="headingOne ">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample "  style={myStyle}>
            <div className="accordion-body" >
              <strong style={subHeadingStyle}>This textUtils app is amazing app: </strong> By using this app you can analyze your text as you want, It save your time.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{border:'none'}}>
          <h2 className="accordion-header" id="headingTwo" >
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong >Free for Everyone</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body" >
              <strong style={subHeadingStyle}>This app is totally free to use: </strong> You can grab the source code from Github.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{border:'none'}}>
          <h2 className="accordion-header" id="headingThree">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             <strong >Browser Compatible and Fully Responsive</strong> 
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample "  style={myStyle}>
            <div className="accordion-body">
              <strong style={subHeadingStyle}>Feel comfort to use this app on any platform: </strong> This app is fully responsive you can use this app on your Mobile devices as well.
            </div>
          </div>
        </div>
      </div>
</>
    )
}
