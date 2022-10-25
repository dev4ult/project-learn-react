import React from 'react';

export default function Meme(props) {
  return (
    <div className="meme-container">
      <img id="place-meme-img" src={props.url} alt="meme" />
    </div>
  );
}
