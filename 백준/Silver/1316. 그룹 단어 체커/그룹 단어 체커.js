let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let num = Number(input[0])
let result = 0;


const chek= (data) => {
  let set = new Set(data[0])
  for(let i =0; i<data.length-1; i++) {
    if(data[i] !== data[i+1]) {
      if(set.has(data[i+1])) {
        return false;
      } else {
        set.add(data[i+1])
      }
    }
  }
  return true
}


for(let i = 1; i<=num; i++) {
  let data = input[i]
  if(chek(data)) {
    result++
  }
}

console.log(result)
