const express = require('express')
const path = require("path")
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    // Fetch how many users enrolled from the database 
    let users = ["Harry", "Aakash", "Rohan"]
    res.render("index", {users: users})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
