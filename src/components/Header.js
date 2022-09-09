import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <img className="nav-logo" src="./logo512.png" alt="Logo" />
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
