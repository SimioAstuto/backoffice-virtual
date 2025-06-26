import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';

function Sidebar({ apps }) {
  const { abrirApp } = useContext(AppContext);

  return (
    <aside className="sidebar">
      <ul>
        {apps.map((app) => (
          <li key={app.name}>
            <button
              className="sidebar-btn"
              onClick={() => abrirApp(app.name)}
              type="button"
            >
              {app.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
