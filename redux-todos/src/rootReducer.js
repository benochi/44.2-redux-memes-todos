import { v4 as uuidv4 } from 'uuid';

//state
const INITIAL_STATE = {
  todos: []
}

//add and delete todo
function rootReducer(state=INITIAL_STATE, action) {
  switch(action.type){
    case 'ADD_TODO' :
      return {...state, todos: [...state.todos, {todo: action.todo, id: uuidv4()}]}
    //map and filter out todo by id
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
  }
  return state;
}

export default rootReducer;