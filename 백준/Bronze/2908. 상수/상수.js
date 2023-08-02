let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split(' ')

let arr = input.map((e) => e.split('').reverse().join(''))

let result = Math.max(...arr)


console.log(result)