import React, { useState } from 'react';
import { evaluate } from 'mathjs';

function Calculator() {
  const [input, setInput] = useState('');

  const agregarInput = (valor) => {
    setInput((prev) => prev + valor);
  };

  const calcularResultado = () => {
  try {
    const resultado = evaluate(input);
    setInput(String(resultado));
  } catch {
    setInput('Error');
  }
  };

  const limpiarInput = () => setInput('');

  return (
    <div className="calculator">
      <input
        type="text"
        value={input}
        readOnly
        className="calculator-input"
        placeholder="0"
      />
      <div className="calculator-buttons">
        {'1234567890.+-*/'.split('').map((char) => (
          <button
            key={char}
            type="button"
            onClick={() => agregarInput(char)}
          >
            {char}
          </button>
        ))}
        <button type="button" onClick={calcularResultado}>=</button>
        <button type="button" onClick={limpiarInput}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
