const {readFileSync, writeFileSync} = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

writeFileSync('./content/result-synd.txt',
    `Here is the result ${first}, ${second}`,
    {flag: 'a'}
)

console.log('done with the task')
console.log('starting next')
