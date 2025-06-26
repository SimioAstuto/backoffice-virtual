import React from 'react';
import { Link } from 'react-router-dom'; // Importá Link aquí

function Header({ logo, menuItems }) {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul className="header-menu">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
