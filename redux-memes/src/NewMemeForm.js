import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


//form needs top and bottom text, image url and delete
const INITIAL_STATE = {
  url: "",
  topText: "",
  bottomText: ""
};

//pass down addMeme from App.js
const NewMemeForm = ({ addMeme }) => {
  const [form, setForm] = useState(INITIAL_STATE);

  //on submit we want to addmeme, give random id, and reset form.
  function handleSubmit(evt){
    evt.preventDefault();
    addMeme({...form, id: uuidv4()});
    setForm(INITIAL_STATE);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setForm(form => ({ ...form, [name]: value }));
  }

  return (
    <div id="memeform">
      <h1>Make a meme!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Meme image URL</label>
        <input
          type="text"
          name="url"
          id="form_url"
          onChange={handleChange}
          value={form.url}
        />
        <label htmlFor="topText">Top Text</label>
        <input
          type="text"
          name="topText"
          id="form_topText"
          onChange={handleChange}
          value={form.topText}
        />
        <label htmlFor="bottomText">Bottom Text</label>
        <input
          type="text"
          name="bottomText"
          id="form_bottomText"
          onChange={handleChange}
          value={form.bottomText}
        />
        <button type="submit" id="meme_submit">
          Generate!
        </button>
      </form>
    </div>
  )

}

export default NewMemeForm