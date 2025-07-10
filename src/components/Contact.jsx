import { useState } from 'react'
import '../styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' })

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Datos enviados:', formData)
    alert('Formulario enviado (simulado)')
    setFormData({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <div className="container mt-5">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          className="form-control"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Mensaje</label>
        <textarea
          name="mensaje"
          className="form-control"
          rows="4"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="btn btn-primary mt-3">Enviar</button>
        <button type="button" className="btn btn-secondary mt-3 ms-3" onClick={() => setFormData({ nombre: '', email: '', mensaje: '' })}>
          Resetear
        </button>
      </form>
    </div>
  )
}

export default Contact
