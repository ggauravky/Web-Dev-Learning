import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar.jsx'

function App() {
  const [text, setText] = useState("hey i am a react developer")

  const btn1 = () => {
    setText("you clicked button 1")
  }

  const btn2 = () => {
    setText("you clicked button 2")
  }

  return (
    <>
    <Navbar logotext="Gaurav"/>
      <div>

          <div>{text}</div>
          <div>
            <button onClick={btn1}>button 1</button>
            ,<br/>

            <button onClick={btn2}>button 2</button>
          </div>
        
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        
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
