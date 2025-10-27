const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('this is a GET request')
})
app.post('/', (req, res) => {
    console.log(req.body);
  res.send('this is a POST request')
})
app.put('/', (req, res) => {
  res.send('this is a PUT request')
})
app.delete('/', (req, res) => {
  res.send('this is a DELETE request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
