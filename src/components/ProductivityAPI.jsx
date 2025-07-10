import { useState, useEffect } from 'react'
import '../styles/ProductivityAPI.css'

function ProductivityAPI() {
  const [quote, setQuote] = useState('Cargando frase motivacional...')

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(data => setQuote(data.content))
      .catch(() => setQuote('No se pudo cargar la frase.'))
  }, [])

  return (
    <div className="container mt-5">
      <h2>Frase Motivacional</h2>
      <blockquote className="quote">{quote}</blockquote>
    </div>
  )
}

export default ProductivityAPI
