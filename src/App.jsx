import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="glass-card">
      <h1>⚛️</h1>
      <h2>React Vite</h2>
      <p style={{fontSize: '0.9em', opacity: 0.8}}>
        Deployed automatically via<br/>DevOps Agent (Docker)
      </p>
      
      <div style={{margin: '20px 0'}}>
        <button onClick={() => setCount((count) => count + 1)}>
          Klik Aku: {count}
        </button>
      </div>

      <p className="read-the-docs" style={{fontSize: '0.7em'}}>
        Tipe: STATIC_BUILD
      </p>
    </div>
  )
}

export default App