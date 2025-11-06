import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar logotext="Gaurav"/>
      <div>
        
        
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p><code>npm run dev</code> to start the development server</p>
         <div className="intro">Gaurav's first React App</div>
      </div>
     
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
