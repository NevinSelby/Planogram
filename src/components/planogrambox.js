import React from 'react'


function createBox(r,c){
    return(
        <div style={{backgroundColor:"white", color: "black"}}>{r.value},{c.value}</div>
    )
}

export default createBox;
