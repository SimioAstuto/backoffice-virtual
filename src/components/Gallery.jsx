import '../styles/Gallery.css'

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80'
]

function Gallery() {
  return (
    <div className="container mt-5">
      <h2>Galería</h2>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <img key={i} src={src} alt={"Imagen " + (i+1)} className="gallery-img" />
        ))}
      </div>
    </div>
  )
}

export default Gallery
