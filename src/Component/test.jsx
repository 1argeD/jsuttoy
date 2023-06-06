import React, { useState } from "react";

function Child(props) {
    return (
    <div>
        <button
          onClick={() => {
            props.setName("여기서 값주기");
            }}
        >
          이름 바꾸기
        </button>
           <div>{props.grandFatherName}</div>
    </div>
    );
}

function Mother(props) {
    console.log('요기는 거쳐가고');
    return (
        <Child grandFatherName={props.grandFatherName} setName={props.setName}/>
    )     
}

function GrandFather() {
    const [name, setName] = useState('여기가 기본 설정');
    return <Mother grandFatherName={name} setName={setName} />;
}


export default GrandFather