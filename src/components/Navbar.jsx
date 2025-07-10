import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar px-4">
      <Link className="navbar-brand" to="/">Sistema</Link>
      <ul className="navbar-nav">
        <li className="nav-item"><Link className="nav-link" to="/notas">Notas</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/calculadora">Calculadora</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/pizarra">Pizarra</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/productividad">Productividad</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/galeria">Galería</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
