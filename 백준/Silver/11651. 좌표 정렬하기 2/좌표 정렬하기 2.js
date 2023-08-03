let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let num = Number(input[0])
let arr = []

for(let i = 1; i<=num; i++) {
  let [x,y] = input[i].split(' ').map(Number)
  arr.push([x,y])
}

arr.sort((a,b) => {
  if(a[1] !== b[1]) return a[1]-b[1]
  else return a[0] - b[0]
})


let result = ''

for(let e of arr) {
  result += e[0]+' '+e[1]+'\n'
}

console.log(result)