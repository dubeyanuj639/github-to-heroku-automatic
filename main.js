// ESM syntax is supported.

const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

app.get('/test', (req, res) => {
  return res.status(200).send("Testing Node.js Deployment on Heroku....")
})

app.get('/test1', (req, res) => {
  return res.status(200).send("Testing Node.js Deployment on Heroku....")
})