let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let arr = input[1].split('').map(Number)

let sum = arr.reduce((a,b) => a+b)


  console.log(sum)

