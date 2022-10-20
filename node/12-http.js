const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Hello there!')
    }
    if(req.url === '/about'){
        res.end('about page')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Wrong page pal!</p>
    <a href="/">go back</a>
    `)
})

server.listen(3000)