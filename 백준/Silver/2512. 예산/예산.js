let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')


let num =Number(input[0])
let arr =input[1].split(' ').map(Number)
let max = Number(input[2])

let start =1;
let end = Math.max(...arr)

let result =0;

while(start<= end) {
  let mid= parseInt((start+end)/2)
  let sum =0;

  for(let x of arr) {
    sum += Math.min(mid,x)
  }
  if(sum<= max) {
    result =mid
    start=mid+1
  }else {
    end =mid-1
  }
}


console.log(result)