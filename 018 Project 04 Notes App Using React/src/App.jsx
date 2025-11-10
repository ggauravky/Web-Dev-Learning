import './App.css'
import Navbar from '../Components/Navbar.jsx'
import React from 'react'
import { useState } from 'react'
import Card from '../Components/card.jsx'

function App() {

  const [notes, setNotes] = useState([])
  const [currentNote, setCurrentNote] = useState({ title: "", desc: "" })

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([...notes, currentNote])
  }

  const handleChange = (e) => {
    setCurrentNote({ ...currentNote, [e.target.name]: e.target.value })
    console.log(currentNote);
  }

  return (
    <>
      <Navbar />
      <main>
        <h1>Notes App - Your One Stop Solution for Taking Notes</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
          </div>
          <input value={currentNote.title} onChange={handleChange} type="text" name="title" id="title" />
          <div>
            <label htmlFor="desc">Description</label>
            <textarea name="desc" id="desc" onChange={handleChange} value={currentNote.desc}>{currentNote.desc}</textarea>
          </div>
          <button type="submit">Add Note</button>
        </form>
      </main>
      <section>
        <h2>Your Notes</h2>
        {notes && notes.map(note => {
          return <Card title={note.title} desc={note.desc} />
        })}
      </section>
    </>
  )
}

export default App
