let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')


let arr = input.map(Number)
let max = Math.max(...arr)
let index = arr.indexOf(max)+1

console.log(max+'\n'+index )