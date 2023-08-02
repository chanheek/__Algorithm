let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let arr = Number(input[0])



for(let i =1; i<=arr; i++) {
  let [r,s] = input[i].split(' ')
  let result =''
  for(let j =0; j<s.length; j++) {
    result += s[j].repeat(r)
  }
  console.log(result)
}


