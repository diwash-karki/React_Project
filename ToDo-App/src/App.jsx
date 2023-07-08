import "./styles.css";
import { useState, useEffect } from "react";
import TodoCard from "./TodoCard";
import React from "react";
import Header from "./Header";
import Form from "./Form";

function App() {
  const [todo, setTodo] = useState(()=>{
    const items = localStorage.getItem("ITEMS")
    if (items == null) return []
    return JSON.parse(items);
  });

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todo));
  },[todo])

  function addTodo(newItem) {
    setTodo(currentTodos => {
      return [...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false }]
    }
    );
    
  }
  function todoToggler(id, completed) {
    console.log(completed)
    setTodo(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo
      });
    });
  }

  function deleteTodo(id) {
    setTodo(currentTodos => {
      return currentTodos.filter(todo => { return todo.id !== id });
    });
    console.log(id, todo)

  }



  return (
    <>
      <div className="overlay"></div>
      <div className="form-container">
        <Header />
        <Form onSubmit={addTodo} />
        <ul className="list">
          {(todo.length === 0) && <p className="no-todo">No Todos Available</p>}
          {todo.map((td) => {
            return <TodoCard value={td} deleteTodo = {deleteTodo} todoToggler={todoToggler}  />;
          })}
        </ul >
      </div>
    </>
  );
}

export default App;
