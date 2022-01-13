import React from "react";

import NewMemeForm from "./NewMemeForm";
import {useSelector, useDispatch} from "react-redux";
import Meme from "./Meme";

//app should allow addMeme and deleteMeme
//Store memes in redux -> rootReducer.js -> index.js
function App() {
  //redux selector and dispatch from rootReducer
  const memes = useSelector(state => state.memes)
  const dispatch = useDispatch();

  function addMeme(meme) {
    dispatch({ type: "ADD_MEME", meme: meme})
  }

  //pass in id, to remove using map.filter in rootReducer.js
  function deleteMeme(id) {
    dispatch({ type: 'DELETE_MEME', id});
  }

  //handle generating meme -> Meme.js
  const memeGen = memes.map(meme => (
    <Meme
      key={meme.id}
      url={meme.url}
      topText={meme.topText}
      bottomText={meme.bottomText}
      deleteMeme={()=> deleteMeme(meme.id)} 
    />
  ))

  return (
    <div className="App">
      <NewMemeForm addMeme={addMeme}/>
      {memeGen}
    </div>
  );
}

export default App;
