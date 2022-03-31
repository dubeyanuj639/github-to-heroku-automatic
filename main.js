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
  return res.status(200).send("Testing Node.js Deployment on Heroku....1")
})

app.get('/test2', (req, res) => {
  return res.status(200).send("Testing Node.js Deployment on Heroku....2")
})

app.get('/test3', (req, res) => {
  return res.status(200).send("Testing Node.js Deployment on Heroku....3")
})

app.get('/test4', (req, res) => {
  return res.status(200).send("Testing Node.js Deployment on Heroku....4")
})