const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Here we are learning express.js')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// run in watch mode:
// node --watch index.js