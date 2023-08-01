let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [a,b] = input[0].split(' ').map(Number);
let c= Number(input[1])

let total = a*60+b+c
total %= 1440

let h= parseInt(total/60)
let m = total%60

console.log(h+' '+m)