let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split(' ')


let [num1,num2] =input

console.log(num1/num2)