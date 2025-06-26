import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [appsAbiertas, setAppsAbiertas] = useState([]);

  const abrirApp = (nombre) => {
    setAppsAbiertas((prev) => {
      if (prev.some(app => app.name === nombre)) return prev;
      return [...prev, { name: nombre }];
    });
  };

  const cerrarApp = (nombre) => {
    setAppsAbiertas((prev) => prev.filter(app => app.name !== nombre));
  };

  return (
    <AppContext.Provider value={{ appsAbiertas, abrirApp, cerrarApp }}>
      {children}
    </AppContext.Provider>
  );
}
