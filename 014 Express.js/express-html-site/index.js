const express = require('express')
const path = require("path")
const app = express()
const port = 3000

app.use(express.static('public'))

 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/about.html"))
})

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/services.html"))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/contact.html"))
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
