const express = require('express')
const app = express()
let {people} = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended:false}))
// parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({succes:true, data:people})
})

app.post('/api/people', (req, res) => {
    const {name} = req.body
    if(!name) {
        return res.status(400).json({succes:false, msg:'400: no name value'})
    }
    res.status(201).send({succes:true, person:name})
})

app.post('/api/postman/people', (req, res) => {
    const {name} = req.body
    if(!name) {
        return res.status(400).json({succes:false, msg:'400: no name value'})
    }
    res.status(201).send({succes:true, data: [...people, name]})
})

app.post('/login', (req, res) => {
    const {name} = req.body
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('401: Unauthorized')
})

app.put('/api/people/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
    
    const person = people.find((person) => person.id === Number(id))

    if(!person) {
        return res.status(404).json({succes:false, msg:'404: not found'})
    }
    const newPeople = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({succes:true, data: newPeople})
})

app.delete('/api/people/:id', (req, res) => {
    const {id} = req.params

    const person = people.find((person) => person.id === Number(id))
    if(!person) {
        return res.status(404).json({succes:false, msg:'404: not found'})
    }

    const newPeople = people.filter((person) => person.id !== Number(id))
    return res.status(200).json({succes:true, data:newPeople})
})

app.listen(5000, ()=>{
    console.log('Server listening on port 5000...');
}) //7:50:15