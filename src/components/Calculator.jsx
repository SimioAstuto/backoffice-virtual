import { useState } from 'react'
import '../styles/Calculator.css'

function Calculator() {
  const [input, setInput] = useState('')

  const handleClick = (val) => setInput(input + val)

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input)
      setInput(result.toString())
    } catch {
      setInput('Error')
    }
  }

  const reset = () => setInput('')

  return (
    <div className="container mt-5">
      <h2>Calculadora</h2>
      <input className="form-control calc-input" type="text" value={input} readOnly />
      <div className="calc-buttons mt-3">
        {['1','2','3','+','4','5','6','-','7','8','9','*','=','0','C','/'].map((btn, i) => {
          if (btn === '=') return <button key={i} className="btn btn-primary btn-calc" onClick={calculate}>=</button>
          if (btn === 'C') return <button key={i} className="btn btn-secondary btn-calc" onClick={reset}>C</button>
          return <button key={i} className="btn btn-outline-primary btn-calc" onClick={() => handleClick(btn)}>{btn}</button>
        })}
      </div>
    </div>
  )
}

export default Calculator
