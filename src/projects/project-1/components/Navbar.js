import React from 'react';
import reactLogo from '../images/logo.svg';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="flex container">
        <img src={reactLogo} className="react-logo" alt="React Logo" />
        <h3 className="text--logo">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
      </div>
    </nav>
  );
}
