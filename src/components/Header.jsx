import React from 'react';

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
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
