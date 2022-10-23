import React from 'react';
import earthLogo from '../images/earth.png';

export default function Navbar() {
  return (
    <nav className="flex">
      <img src={earthLogo} alt="Earth Logo" />
      <h4 className="nav-title">my trave journal.</h4>
    </nav>
  );
}
