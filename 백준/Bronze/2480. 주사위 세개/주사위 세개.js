let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split(' ')


let arr = input.map(Number)

let one = arr[0]
let two = arr[1]
let three = arr[2]

let count = [0,0,0]

for(let i =0; i<arr.length; i++) {
  
  if(arr[i] === one) count[0]++
  else if(arr[i] === two) count[1]++
  else count[2]++
}
  if(count[0] === count[1] && count[2] === count[1]) {
    console.log(Math.max(...arr)*100)
  } else {
    let max = Math.max(...count)
    let result = arr[count.indexOf(max)]
    
    if(max ===3 ){
      console.log(result*1000+10000)
    } else if (max ===2) {
      console.log(result*100+1000)
    } 
  }