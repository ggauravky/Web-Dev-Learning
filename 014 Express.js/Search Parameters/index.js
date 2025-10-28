const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/search', (req, res) => {
  let query = req.query.q
  let name = req.query.name
  let age = req.query.age

  res.send(`Search results for: ${query}, ${name}, ${age}`)

  // Example request: /search?q=javascript&name=John&age=30
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// run in watch mode:
// node --watch index.js