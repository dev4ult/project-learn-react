import React from 'react';

export default function Meme(props) {
  const [memeImage, setMemeImage] = React.useState('https://i.imgflip.com/3lmzyx.jpg');

  const [allMemeImages, setAllMemeImages] = React.useState({});

  React.useEffect(() => {
    async function getMeme() {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const data = await response.json();
      setAllMemeImages(data);
    }

    getMeme();
  }, []);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const { url } = memesArray[randomNumber];
    setMemeImage(url);
  }

  const { topText, bottomText } = props;

  return (
    <div className="container">
      <button className="get-img-btn" onClick={getMemeImage}>
        Get a new meme image
      </button>
      <div className="meme-container">
        <h2 className="top-text">{topText}</h2>
        <img id="place-meme-img" src={memeImage} alt="meme" />
        <h2 className="bottom-text">{bottomText}</h2>
      </div>
    </div>
  );
}
