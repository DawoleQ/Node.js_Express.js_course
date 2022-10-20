var http = require('http')
var fs = require('fs')

http.createServer(function (req,res) {
    const text = fs.readFileSync('./content/big.txt', 'utf-8')
    res.end(text)
}).listen(5000)