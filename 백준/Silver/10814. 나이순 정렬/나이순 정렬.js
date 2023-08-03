let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let num = Number(input[0])
let arr =[];


for(let i =1; i<=num; i++) {
  let age = input[i].split(' ')[0]
  let name = input[i].split(' ')[1]
  arr.push([age,name])
}

arr.sort((a,b) => a[0]-b[0])

let result ='';

for(let e of arr) {
  result += e[0]+' '+e[1]+'\n'
}


console.log(result)