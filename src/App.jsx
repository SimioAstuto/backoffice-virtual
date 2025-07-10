import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Notes from './components/Notes.jsx'
import Calculator from './components/Calculator.jsx'
import Whiteboard from './components/Whiteboard.jsx'
import ProductivityAPI from './components/ProductivityAPI.jsx'
import Contact from './components/Contact.jsx'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notas" element={<Notes />} />
        <Route path="/calculadora" element={<Calculator />} />
        <Route path="/pizarra" element={<Whiteboard />} />
        <Route path="/productividad" element={<ProductivityAPI />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
