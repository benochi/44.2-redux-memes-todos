import React, { useState } from "react";
import "./NewTodoForm.css"

//newTodoForm

function NewTodoForm({ newTodo }) {
  const [todo, setTodo] = useState('');

  function handleChange(evt) {
    setTodo(evt.target.value);
  }

  //use newTodo passed from TodoList
  function handleSubmit(evt) {
    evt.preventDefault();
    newTodo(todo);
    setTodo('')
  }

  return(
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Enter a todo:</label>
        <input
          name="todo"
          type="text"
          onChange={handleChange}
          value={todo}
        />
        <button>Add Todo!</button>
      </form>
    </div>
  );
}

export default NewTodoForm;