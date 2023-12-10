function solution(answers) {
    let result = [0,0,0];

let arr1= [1,2,3,4,5]
let arr2 = [2,1,2,3,2,4,2,5]
let arr3 = [3,3,1,1,2,2,4,4,5,5]

let maxresult = [];
for(let i =0; i<answers.length; i++) {
  if(answers[i] === arr1[i%arr1.length]) {
    result[0]++
  }
  if(answers[i] === arr2[i%arr2.length]) {
    result[1]++
  }
  if(answers[i] === arr3[i%arr3.length]) {
    result[2]++
  }
 
}
const max = Math.max(...result)
if(result[0] === max) maxresult.push(1)
if(result[1] === max) maxresult.push(2)
if(result[2] === max) maxresult.push(3)
return maxresult
}