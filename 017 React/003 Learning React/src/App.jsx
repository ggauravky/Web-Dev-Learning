import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Contact from './components/contact.jsx'

function App() {
  const [text, setText] = useState("hey i am a react developer")

  const btn1 = () => {
    setText("you clicked button 1")
  }

  const btn2 = () => {
    setText("you clicked button 2")
  }

  const items = ["Home", "Services", "About", "Contact" ,"Services"]

  const isDiabled = false;

  return (
    <>
    <Navbar logotext="Gaurav" items={items} />
      <div>
          <div>{text}</div>
          <div>
            {isDiabled && <button onClick={btn1}>suger cofee</button>}
            <br/>
            <button onClick={btn2}>without suger cofee</button>
            <br />
            <button onClick={()=>{alert("heey , why are you clicking this ? hm..?")}}>button 3</button>
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
      <Contact />
    </>
  )
}

export default App
