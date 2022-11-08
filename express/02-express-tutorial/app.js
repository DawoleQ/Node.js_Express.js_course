const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1> <a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params
    const singleProduct = products.find((product) => product.id == productID)
    if(!singleProduct) {
        return res.status(404).send(`<h1>404: Not Found :(</h1> </br> <p>A product with id: "${productID}" does not exist.</p>`)
    }
    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:review', (req, res) => {
    console.log(req.params)
    res.send('hello world')
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1) {
        return res.status(200).json({sucess: true, data: []})
    }

    res.status(200).json(sortedProducts)
})

app.listen(5000, ()=>{
    console.log('Server listening on port 5000...');
})