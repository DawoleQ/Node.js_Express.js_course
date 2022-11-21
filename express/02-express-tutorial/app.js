const express = require('express')
const logger = require('./logger')
const auth = require('./authorize')
const app = express()

// req => middleware => res

app.use([logger, auth])

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    res.send('Items')
})

app.listen(5000, ()=>{
    console.log('Server listening on port 5000...');
})