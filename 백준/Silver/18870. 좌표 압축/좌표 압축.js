let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let num = Number(input[0])

let arr = input[1].split(' ').map(Number)
arr
let set = [...new Set(arr)]
set.sort((a,b) => a-b)
set

let map = new Map();

for(let i = 0; i<set.length; i++) {
  map.set(set[i],i)
}

let result = ''

for(let e of arr) {
  result += map.get(e)+' '
}

console.log(result)