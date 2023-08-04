let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')


let num = Number(input[0])
let arr = input[1].split(' ').map(Number)
let result = [];
let sorted= arr.map((e,index) => [index+1,e]).sort((a,b) => a[1]-b[1])
let sum = 0;

for(let i =0; i<sorted.length; i++) {
  
  sum += sorted[i][1]
  result.push(sum)
}

let answer = result.reduce((a,b) => a+b)

console.log(answer)
