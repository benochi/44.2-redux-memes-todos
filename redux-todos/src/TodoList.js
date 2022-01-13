import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList(){
  //redux hooks
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  //will access ADD_TODO in rootReducer switch
  function handleNewTodo(todo) {
    dispatch({
      type: "ADD_TODO",
      todo
    });
  }

  function handleDelete(id) {
    dispatch({
      type: "DELETE_TODO",
      id
    });
  }

  //todo -> id, key, todo, deleteTodo
  const todoGen = todos.map(todo => (
    <Todo 
      id={todo.id}
      key={todo.id}
      todo={todo.todo}
      deleteTodo={handleDelete}
    />
  ));
  
  return (
    <div>
      <NewTodoForm newTodo={handleNewTodo} />
      <ul>{todoGen}</ul>
    </div>
  );

}

export default TodoList;