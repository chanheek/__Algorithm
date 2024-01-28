function solution(bridge_length, weight, truck_weights) {
       
let time = 0;
let arr= new Array(bridge_length).fill(0)


while(arr.length>0) {
  arr.shift()
  if(truck_weights.length>0) {
    const sum = arr.reduce((a,b) => a+b,0)
    if(sum+truck_weights[0] <= weight) {
      arr.push(truck_weights.shift())
    } else {
      arr.push(0)
    }
  }
  time++
}

return  time

}