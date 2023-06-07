import React from "react";



const User=(props) =>{
        const squareStyle = {
        width: "100px",
        height: "100px",
        border: "1px solid green",
        display:"flex",
        alignItems: "center",
        justifyContent: "center", 
        }
    
    return(
        <div style={squareStyle}>
            <div>{props.user.age}살-</div>
            <div>{props.user.name}</div>
        </div>
    );
}

const Map = () => {
    
    const Style = {
        padding: "100px",
        display: "flex",
        gap: "12px",
    }

    const users = [
        { id: 1, age: 30, name: "송중기" },
        { id: 2, age: 24, name: "송강" },
        { id: 3, age: 21, name: "김유정" },
        { id: 4, age: 29, name: "구교환" },
    ]

    return(
        <div style={Style}> 
        {users.map((user) => {
            if(user.age<25) {
                return <User user={user} key={user.id}/>
            } else {
                return null;
            }
        })}
        </div>
    )
}

export default Map
