let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')



let s= Number(input[0])


let sum = 0;
let result =0;

while(sum<=s) {
  result +=1
  sum +=result
}

console.log(result-1)