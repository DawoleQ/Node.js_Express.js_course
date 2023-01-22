const express = require('express')
const app = express()
const port = 3000
const tasks = require('./routes/tasks')

// middleware
app.use(express.json())

// routes
app.get('/hello', (req, res) => {
    res.status(200).send('Task Manager App').end()
})

app.use('/api/v1/tasks', tasks)


app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})

// 28:30