let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let arr = input[1].split(' ').map(Number)
let max= Math.max(...arr)
let min = Math.min(...arr)


console.log(min,max)