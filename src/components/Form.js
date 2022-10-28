import React from 'react';
import Meme from './Meme';

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstText: '',
    lastText: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  }

  const { firstText, lastText } = formData;

  return (
    <>
      <form className="form container">
        <div className="input-text flex">
          <input type="text" placeholder="top text" onChange={handleChange} name="firstText" value={firstText} />
          <input type="text" placeholder="bottom text" onChange={handleChange} name="lastText" value={lastText} />
        </div>
      </form>
      <Meme topText={firstText} bottomText={lastText} />
    </>
  );
}
