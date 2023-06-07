import React from "react";

function Square(props) {
    const squareStyle = {
        width: "100px",
        height: "100px",
        border: "1px solid green",
        display:"flex",
        alignItems: "center",
        justifyContent: "center", 
    }
    return <div style={squareStyle}> {props.vegetableName} </div>
}

const Repeat = () => {
    
      const style = {
        padding: "100px",
        display: "flex",
        gap: "12px",
      };
    
      const vegetables = ["감자", "고구마", "오이", "가지", "옥수수"];
    
      return (
        <div style={style}>
          {vegetables.map((vegetableName) => {
            return <Square key={vegetableName} vegetableName={vegetableName}></Square>
          })}
        </div>
      );
}

export default Repeat