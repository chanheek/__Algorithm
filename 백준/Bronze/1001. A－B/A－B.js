let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)


let num = input[0]-input[1]

console.log(num)