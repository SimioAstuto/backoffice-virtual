import { useRef, useState, useEffect } from 'react'
import '../styles/Whiteboard.css'

function Whiteboard() {
  const canvasRef = useRef(null)
  const [drawing, setDrawing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.lineWidth = 2
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#0d6efd'
  }, [])

  const startDrawing = e => {
    setDrawing(true)
    const ctx = canvasRef.current.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
  }

  const draw = e => {
    if (!drawing) return
    const ctx = canvasRef.current.getContext('2d')
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    ctx.stroke()
  }

  const stopDrawing = () => setDrawing(false)

  return (
    <div className="container mt-5">
      <h2>Pizarra</h2>
      <canvas
        ref={canvasRef}
        width={700}
        height={400}
        className="whiteboard-canvas"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
    </div>
  )
}

export default Whiteboard
