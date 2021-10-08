const express = require('express')
const app = express()

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization,name, Accept, X-Requested-With'
  )
  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})
app.get('/selectToken', (req, res) => {
  const { query } = req
  if (+query.num === 10) {
    res.send('200')
  } else {
    res.send('201')
  }
})

app.listen(3000, () => {
  console.log(`Start a service: http://localhost:3000`)
})
