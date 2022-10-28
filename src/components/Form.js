import React from 'react';

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstText: '',
    lastText: '',
  });

  function handleChange(event) {
    const selectedInput = event.target.name;
    const valueInput = event.target.value;
    setFormData((prevFormData) => {
      return { ...prevFormData, [selectedInput]: valueInput };
    });
  }

  const { firstText, lastText } = formData;

  return (
    <form className="form container">
      <div className="input-text flex">
        <input type="text" placeholder="top text" onChange={handleChange} name="firstText" />
        <input type="text" placeholder="bottom text" onChange={handleChange} name="lastText" />
      </div>
      <p>
        <span>{firstText}</span> <span>{lastText}</span>
      </p>
    </form>
  );
}
