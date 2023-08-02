let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let arr = input[1].split(' ')

let max = Math.max(...arr)
let jojak = arr.map((e) => e/max*100)
let aver = jojak.reduce((a,b) => a+b)/arr.length;


  console.log(aver)

