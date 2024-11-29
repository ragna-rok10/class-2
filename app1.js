//console.log(process.argv)
//console.log(process.argv[2])
const new1=process.argv
const fs = require('fs')
fs.writeFileSync(new1[2],new1[3])
