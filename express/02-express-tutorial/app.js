const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// adding to assets
// SSR
// })

app.all('*', (req, res)=>{
    res.status(404).send('<h1>404: Not Found :(</h1>')
})

app.listen(5000, ()=>{
    console.log('Server listening on port 5000...')
})