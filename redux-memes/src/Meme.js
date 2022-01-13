import React from "react";
import "./Meme.css";

function Meme({ id, url, topText, bottomText, deleteMeme }) {
  //give Meme abilty to delete by id
  function handleDeleteMeme(id){
    deleteMeme(id);
  }

  return (
    <div className="meme">
      <div className="container">
        <span className="top-text">{topText}</span>
        <img src={url} className="meme-img"/>
        <span className="bottom-text">{bottomText}</span>
        <button className="meme-delete" onClick={handleDeleteMeme}>
          Delete this meme!
        </button>
      </div>
    </div>
  )
}

export default Meme;