import React from 'react';
import "./Todo.css";

function Todo({todo, deleteTodo, id}) {

  function handleDelete(){
    deleteTodo(id)
  }

  return (
    <div className="todo">
      <li>{todo}</li>
      <button onClick={handleDelete}>DELETE</button> 
    </div>
  )
}

export default Todo;