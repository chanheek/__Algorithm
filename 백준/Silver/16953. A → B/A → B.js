let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')



let num = Number(input[0].split(' ')[0])
let end = Number(input[0].split(' ')[1])


let flag = false
let count =1;

while(num <= end) {
  if(num === end) {
    flag= true
    break;
  }

  if(end%2 ===0) {
    end = parseInt(end/2)
  }else if (end%10 === 1) {
    end = parseInt(end/10)
  } else {
    break;
  }
  count++
}

if(flag) console.log(count)
else console.log(-1)