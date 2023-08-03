let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)


let result = input.sort((a,b) => a-b).join(' ').trim()


console.log(result)


