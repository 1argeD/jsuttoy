import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
    return(
        <div>
            <h1>타이틀</h1>
            <p>대충 내용</p>
            <Link to = "/grandFather">대충 링크 타고 가기</Link>
        </div>
    )
}

export default MainPage