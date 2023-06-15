import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const UseEffect = () => {
    const [value, setValue] = useState("");
    useEffect(() => {
        console.log("hello useEffect")
    }, [value])

    const nav = useNavigate();

    useEffect(() => {
        return () => {
            console.log("일단 되는지 보자고")
        }
    })

    return (
        <div>
            <input
            type="text"
            value={value}
            onChange={(event) => {
                setValue(event.target.value);
            }}>
            </input>
            <button 
            onClick={()=>{
                nav("/todos")
            }}>
                속세를 벗어나는 버튼
            </button>
        </div>
    )
}


export default UseEffect