const getAllTasks = (req, res) => {
    res.send('all items')
}

const createTask = (req, res) => {
    res.send('Create task')
}

const getTask = (req, res) => {
    res.send('Get task')
}

const updateTask = (req, res) => {
    res.send('Update task')
}

const deleteTask = (req, res) => {
    res.send('Delete task')
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}