import React from 'react';
import memesData from '../memesData';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/3lmzyx.jpg',
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: memesArray[randomNumber].url }));
  }

  return (
    <div className="container">
      <button className="get-img-btn" onClick={getMemeImage}>
        Get a new meme image
      </button>
      <div className="meme-container">
        <img id="place-meme-img" src={meme.randomImage} alt="meme" />
      </div>
    </div>
  );
}
