let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString()



let num = Number(input)


for(let i = 1; i<=9; i++) {
  console.log(num+' '+'*'+' '+i+' '+'='+' '+num*i)
}