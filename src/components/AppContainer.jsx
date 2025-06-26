import React from 'react';
import { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Draggable from 'react-draggable';

import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Calculator from './Calculator.jsx';
import Notas from './Notas.jsx';

import { AppContext } from '../context/AppContext.jsx';

function AppContainer() {
  const { appsAbiertas, cerrarApp } = useContext(AppContext);

  return (
    <Router>
      <div className="app-container">
        <Header
          logo="/assets/logo.png"
          menuItems={[
            { name: 'Home', url: '/' },
            { name: 'Calculadora', url: '/calculadora' },
            { name: 'Notas', url: '/notas' },
          ]}
        />

        <div className="content-wrapper">
          <Sidebar
            apps={[
              { name: 'Home', url: '/' },
              { name: 'Calculadora', url: '/calculadora' },
              { name: 'Notas', url: '/notas' },
            ]}
          />

          <main className="main-content">
            {appsAbiertas.length === 0 ? (
              <Home />
            ) : (
              appsAbiertas.map((app) => (
                <Draggable key={app.name} handle=".app-window-header">
                  <div className="app-window">
                    <div className="app-window-header">
                      <h3>{app.name}</h3>
                      <button
                        type="button"
                        onClick={() => cerrarApp(app.name)}
                        className="close-btn"
                      >
                        ✖
                      </button>
                    </div>

                    {app.name === 'Calculadora' && <Calculator />}
                    {app.name === 'Notas' && <Notas />}
                  </div>
                </Draggable>
              ))
            )}
          </main>
        </div>

        <Footer text="© 2025 Backoffice Virtual" />
      </div>
    </Router>
  );
}

export default AppContainer;
