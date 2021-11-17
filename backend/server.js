const express = require('express')
const products = require('./data/products')
const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id)
  res.json(product)
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.listen(5001, console.log('Server running on port 5001'))
