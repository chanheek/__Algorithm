let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let num = Number(input[0])


let five = 0;
let three = 0;


while(true){
  if(num % 5 === 0){
      five = num / 5;
      console.log(five + three);
      break;
  }
  if(num < 0){
      console.log(-1);
      break;
  }
  num = num - 3;
  three++;
}