let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')



let str = input[0].split('-')

let result = 0;

for(let i =0; i<str.length; i++) {
  let sum = str[i].split('+').map(Number).reduce((a,b) => a+b)
  sum
  if(i === 0) result += sum
  else result -= sum
}

console.log(result)
