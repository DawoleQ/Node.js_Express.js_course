const auth = (req, res, next) => {
    const {user} = req.query
    if(user === 'john') {
        req.user = {name: 'john', id: 3}
        next()
    }
    else {
        res.status(401).send('Error 401: Unauthorized')
    }
}

module.exports = auth