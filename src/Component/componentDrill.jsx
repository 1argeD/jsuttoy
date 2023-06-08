import React, { useState } from "react";
import styled from "styled-components";



function ComponentDrill() {
    const [item, setItem] = useState(" "); 
    const [todos, setTodos] = useState([
        {
          id: 1,
          item: "react를 배워봅시다.",
        },
      ]);

    const addTodo = () => {
        const newTodo = {
            id : todos.length+1,
            item : item,
        }
        setTodos([...todos, newTodo])
        setItem("")
    
    }

    return (
        <>  
        <Container>
        <h1>Todo List</h1>
            <input
              type="text" 
              value={item}
              onChange={(event) => {
                setItem(event.target.value)
                }} />
            <button
            onClick={addTodo}>   
            추가하기
            </button>
        </Container>
            <TodosContainer>
                {todos.map((todo) => (
                    <Todos key={todo.id} >
                        {todo.item}
                    </Todos>
                ))}
            </TodosContainer>
        </>
    )
}


export default ComponentDrill

const Container = styled.div`
    margin-left : 50%;
    height : 100px;
    aligin-items : center;
    justify-content: center;
`

const Todos = styled.div`    
    width: 100px;
    height: 100px;
    border: 2px solid green;
    border-radius : 8px;
    padding : 5px;
` 

const TodosContainer = styled.div`
    display: flex;
    gap 12px
`
