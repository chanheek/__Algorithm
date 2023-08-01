let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let a= input[0]

let b= input[1]

let result1 = a*b[2]
let result2 = a*b[1]
let result3 = a*b[0]
let result4 = a*b
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)

