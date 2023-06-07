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
            <Todoscontainer>
                {todos.map((todo) => (
                    <div className="todo" key={todo.id}>
                        {todo.item}
                    </div>
                ))}
            </Todoscontainer>
        </>
    )
}


export default ComponentDrill

const Todoscontainer = styled.div`    
    margin: 100px;
    width: 100px;
    height: 100px;
    border: 1px solid green;
    display: flex;
    align-items: center;
    justify-content: center;
` 
