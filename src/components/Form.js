import React from 'react';
import Meme from './Meme';
import memesData from '../memesData';

export default function Form() {
  const [url, setUrl] = React.useState('https://i.imgflip.com/30b1gx.jpg');

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setUrl(memesArray[randomNumber].url);

    const imgContainer = document.querySelector('#place-meme-img');
    imgContainer.setAttribute('src', url);
  }

  return (
    <div className="form container">
      <div className="input-text flex">
        <input type="text" placeholder="top text" />
        <input type="text" placeholder="bottom text" />
      </div>
      <button className="get-img-btn" onClick={getMemeImage}>
        Get a new meme image
      </button>
      <Meme url="https://i.imgflip.com/30b1gx.jpg" />
    </div>
  );
}
