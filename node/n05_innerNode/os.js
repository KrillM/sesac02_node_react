const os = require('os')

console.log('운영체제 정보------------------------------')
console.log('Arch: ', os.arch())
console.log('Platform: ', os.platform())
console.log('Type: ', os.type())
console.log('Uptime: ', os.uptime())
console.log('Hostname: ', os.hostname())
console.log('Release: ', os.release())

console.log('경로------------------------------')
console.log('Homedir', os.homedir())
console.log('Tmpdir', os.tmpdir())

console.log('CPU 정보------------------------------')
console.log('CPUS: ', os.cpus())
console.log('CPUS 길이: ', os.cpus().length)

console.log('메모리 정보------------------------------')
console.log('Freemem: ', os.freemem())
console.log('Totalmem: ', os.totalmem())