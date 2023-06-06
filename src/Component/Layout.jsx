import React from "react"

function User(props) {
    return <div>{props.children}</div>
}

function Mother() {
    return <User>이건 헤더라구</User>
}

function Lay() {
    return (
        <Mother>
            <div>어바웃 컨탠츠가 들어가야하는구나</div>
        </Mother>
    )
}

export default Lay