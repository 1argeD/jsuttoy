import React from "react";
import styled from "styled-components";

const StContainer = styled.div`
    display : flex;
`

const StBox = styled.div`
    width: 100px;
    height: 100px;
    border: 2px solid ${(props) => props.borderColor};
    magin: 20px;
`

const StyleComponent = () => {
    const boxList = ["red", "green", "blue"]

    const getBoxNmae = (color) => {
        switch (color) {
            case "red" :
                return "빨간 박스";
            case "blue" :
                return "파랑 박스";
            case "green" : 
                return "초록 박스";
            default:
                return "검정 박스";
        }
    }

    return (
        <StContainer>
            {boxList.map((box) => (
                <StBox borderColor={box}>{getBoxNmae(box)}</StBox>
            ))}
        </StContainer>
    )
}

export default StyleComponent