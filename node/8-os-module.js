const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime
console.log(`The System Uptime is ${os.uptime()} seconds`)

//Operating system information
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS)