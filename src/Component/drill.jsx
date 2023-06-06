import React, { useState } from "react";

const Drill = () => {
    const [value, setNum] = useState(0) 
    
    return (
        <>
            <button onClick={() => {setNum(value + 1)}}> + </button>
                <div>{ value }</div>
            <button onClick={()=>{setNum(value - 1)}}> - </button>
        </>
    )
    
}

export default Drill