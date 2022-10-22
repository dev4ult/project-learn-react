import React from 'react';
import heroImage from '../images/hero-airbnb.png';

export default function Hero() {
  return (
    <header className="container flex">
      <img className="hero-image" src={heroImage} alt="hero" />
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-lind hosts-all without leaving home.</p>
    </header>
  );
}
