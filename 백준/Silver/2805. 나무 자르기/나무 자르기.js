let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')



let num = Number(input[0].split(' ')[0])

let height = Number(input[0].split(' ')[1])

let arr = input[1].split(' ').map(Number)

let result =0;

let start =0;
let end = Math.max(...arr)



while (start<=end) {
  let mid = parseInt((start+end)/2)
  let sum =0;
  for(let e of arr) {
    if(e > mid) {
      sum += e-mid
    }
  }
  if(sum<height) {
    end = mid-1
  }else {
    result =mid
    start =mid+1
  }
}

console.log(result)