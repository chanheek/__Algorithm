let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')


let num = input[0].split(' ')[0]
let price =input[0].split(' ')[1]
let arr = [];
let result = 0;

for(let i =1; i<=num; i++) {
  arr.push(Number(input[i]))
}

for(let i =num-1; i>=0; i--){
  result += parseInt(price/arr[i])
  price %= arr[i]
}

console.log(result)