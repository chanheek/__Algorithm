let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')



let n = Number(input[0])
let result = ''
for(let i =1; i<=n; i++) {
  let to = Number(input[i].split(' ')[1])
  let n = Number(input[i].split(' ')[0]).toString(to)
  n
  if(n.length%2 !== 0){
    const left =  n.slice(0,parseInt(n.length)/2).split('').join('')
    const right = n.slice(parseInt(n.length)/2+1,n.length).split('').reverse().join('')
    if(left === right) {
      result += 1+'\n'
    }  else {
      result += 0+'\n'
    }
  } else{
    const left =  n.slice(0,parseInt(n.length)/2).split('').join('')
    const right = n.slice(parseInt(n.length)/2,n.length).split('').reverse().join('')
    if(left === right) {
      result += 1+'\n'
    } else {
      result += 0+'\n'
    }
  }
}

console.log(result)