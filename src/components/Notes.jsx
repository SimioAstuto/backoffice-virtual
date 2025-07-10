import { useState } from 'react'
import '../styles/Notes.css'

function Notes() {
  const [text, setText] = useState('')
  const [notes, setNotes] = useState([])

  const addNote = () => {
    if (text.trim()) {
      setNotes([...notes, text.trim()])
      setText('')
    }
  }

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index))
  }

  return (
    <div className="container mt-5">
      <h2>Notas</h2>
      <textarea
        className="form-control note-textarea"
        rows="3"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Escribí tu nota..."
      />
      <button className="btn btn-primary mt-3" onClick={addNote}>Agregar nota</button>
      <ul className="list-group mt-4">
        {notes.map((note, i) => (
          <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{note}</span>
            <button className="btn btn-outline-danger btn-sm" onClick={() => deleteNote(i)}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Notes
