import { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Draggable from 'react-draggable';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Notas from './components/Notas';

import { AppContext } from './context/AppContext';

function App() {
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

export default App;
