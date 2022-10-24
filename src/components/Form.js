import React from 'react';

export default function Form() {
  return (
    <form className="container">
      <div className="input-text flex">
        <input type="text" placeholder="top text" />
        <input type="text" placeholder="bottom text" />
      </div>
      <input type="submit" value="Get a new meme image" />
    </form>
  );
}
