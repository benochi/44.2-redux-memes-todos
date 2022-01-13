//set INITIAL_STATE of store. 
const INITIAL_STATE = {
  memes: []
}

//rootReducer takes a state and action
function rootReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_MEME' :
      return {...state, memes: [...state.memes, {...action.meme}]}
    //map and filter out meme by id. 
    case 'DELETE_MEME' :
      return {
        ...state, 
        memes: state.memes.filter(meme => meme.id !== action.id)
      };
  }
  return state;
}

export default rootReducer;