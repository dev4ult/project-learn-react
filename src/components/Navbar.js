import React from 'react';
import TrollFace from '../images/troll-face.png';

export default function Navbar() {
  return (
    <nav className="flex">
      <img className="troll-face" src={TrollFace} alt="troll" />
      <h3 className="nav-title">Meme Generator</h3>
      <p className="nav-sub-title">React Course - Project 5</p>
    </nav>
  );
}
