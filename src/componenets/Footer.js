import React from 'react'

function Footer(props) {

    let myStyle={

        color: props.mode==='light'?'white':'black',
        backgroundColor: props.mode==='light'?'#111':'#ced4da',
        height:'10vh',
        textAlign:'center',
        paddingTop:'20px',
        marginTop:'230px',
        marginBottom:'0px'
        
    }


    return (



       <footer style={myStyle}>

        Created By <span>Az-Tech</span> | &copy; 2021 All rights reserved.



       </footer>
    )
}

export default Footer
