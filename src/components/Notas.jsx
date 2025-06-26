import React, { useEffect, useState } from 'react';

function Notas() {
  const [texto, setTexto] = useState('');

  useEffect(() => {
    const guardado = localStorage.getItem('notas');
    if (guardado) setTexto(guardado);
  }, []);

  useEffect(() => {
    localStorage.setItem('notas', texto);
  }, [texto]);

  return (
    <div className="notas-app">
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribí tus notas acá..."
        className="notas-textarea"
      />
    </div>
  );
}

export default Notas;
