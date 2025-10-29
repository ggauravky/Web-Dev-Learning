const express = require('express')
const app = express()
const { MongoClient } = require('mongodb');
const port = 3000

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

// Database Name
const dbName = 'myschool';


app.get('/', async (req, res) => {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('students');
  const findResult = await collection.find().toArray();
  console.log(findResult);

  res.send("Hello World!");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
