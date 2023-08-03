let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let num = input[0].split(' ')[1]

let arr = input[1].split(' ').map(Number).sort((a,b) => a-b)

let result = arr[num-1]


console.log(result)