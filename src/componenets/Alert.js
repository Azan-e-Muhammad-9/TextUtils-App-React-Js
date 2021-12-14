import React from 'react'

function Alert(props) {


    const setFirstLetterToUpper=(str)=>{

        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
            
        <div style={{height:'80px'}}>

    
            { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">

            <strong>{setFirstLetterToUpper(props.alert.type)}</strong>: {props.alert.message}
          
    </div>}
        </div>


    )
}

export default Alert
