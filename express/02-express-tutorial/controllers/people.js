let {people} = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({succes:true, data:people})
}

const createPerson = (req, res) => {
    const {name} = req.body
    if(!name) {
        return res.status(400).json({succes:false, msg:'400: no name value'})
    }
    res.status(201).send({succes:true, person:name})
}

const createPersonPostman = (req, res) => {
    const {name} = req.body
    if(!name) {
        return res.status(400).json({succes:false, msg:'400: no name value'})
    }
    res.status(201).send({succes:true, data: [...people, name]})
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
    const {id} = req.params

    const person = people.find((person) => person.id === Number(id))
    if(!person) {
        return res.status(404).json({succes:false, msg:'404: not found'})
    }

    const newPeople = people.filter((person) => person.id !== Number(id))
    return res.status(200).json({succes:true, data:newPeople})
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}