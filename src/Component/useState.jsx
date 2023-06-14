import React , {useState} from "react";



const UseState = () => {
    const [number, setNumber] = useState(0);

    return (
        <>
        <div>{number}</div>
        <button
        onClick={()=>{
            setNumber(number+1); 
            setNumber(number+1);
            setNumber(number+1);
        }}>
            1씩 증가 버튼
        </button>

        <button
        onClick={()=>{
            setNumber((prevoiusState) => prevoiusState +1);
            setNumber((prevoiusState) => prevoiusState +1);
            setNumber((prevoiusState) => prevoiusState +1);
        }}>
            3씩 증가 버튼 
        </button>
        </>
    )
}

export default UseState

