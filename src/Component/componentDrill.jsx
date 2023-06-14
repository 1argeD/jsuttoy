import React, { useState } from "react";
import styled from "styled-components";



function ComponentDrill() {
    const [item, setItem] = useState(" "); 
    const [todos, setTodos] = useState([
        {
          id: 1,
          item: "이게 첫 카드.",
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
            <Button
            onClick={addTodo}>   
            추가하기
            </Button>
            </Container>
            <Todoscontainer>
                {todos.map((todo) => (
                    <Todos key={todo.id}>
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
    margin-top: 200px;
`

const Button = styled.button`
`

const Todos = styled.div`   
    width: 100px;
    height: 100px;
    border: 2px solid green;
    padding : 5px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    display:flex;
` 

const Todoscontainer = styled.div`
    marign : 10px;
    display:flex;
    gap :12px;
`
