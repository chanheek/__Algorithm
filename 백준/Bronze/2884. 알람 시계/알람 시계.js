let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split(' ')


let h = Number(input[0])
let m = Number(input[1])


if(m < 45) {
  m += 60
  h -= 1
}

if(h < 0) h += 24



console.log(`${h} ${m-45}`)