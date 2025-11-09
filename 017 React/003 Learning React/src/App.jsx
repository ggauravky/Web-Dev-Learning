import { Routes, Route, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import "./index.css"


function Home() {
  return <h2>Home Page</h2>
}

function About() {
  return <h2>About Page</h2>
}

function Contact() {
  return <h2>Contact Page</h2>
}

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </div>

      <div>
        <h2>Welcome to My Website</h2>
        <p>This is a simple React Router example.</p>
      </div>

      <div>
        <h3>Navigation Links:</h3>
        <ul>
          <li><Link to="/" className="nav-link">Go to Home</Link></li>
          <li><Link to="/about" className="nav-link">Learn About Us</Link></li>
          <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
        </ul>
      </div>

      <footer>
        <p>&copy; 2025 My Website</p>
      </footer>
    </div>
  )
}

export default App