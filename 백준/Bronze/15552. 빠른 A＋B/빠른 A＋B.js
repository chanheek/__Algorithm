let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let test = Number(input[0])

let result =''

for(let i = 1; i<=test; i++) {
  let num = input[i].split(' ')
  let sum = Number(num[0])+Number(num[1])
  result +=sum+'\n'
}

  

console.log(result)