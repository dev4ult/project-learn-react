import React from 'react';
import logo from '../images/project-2/airbnb-logo.png';

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <img className="logo" src={logo} alt="airbnb logo" />
      </div>
    </nav>
  );
}
