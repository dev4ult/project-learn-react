import React from 'react';

export default function Form() {
  return (
    <div className="form container">
      <div className="input-text flex">
        <input type="text" placeholder="top text" />
        <input type="text" placeholder="bottom text" />
      </div>
    </div>
  );
}
