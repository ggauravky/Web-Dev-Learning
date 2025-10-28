const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let number=5500;
  res.render('index.ejs', { num: number });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
