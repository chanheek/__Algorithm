function solution(food) {
   
    let result = '';

    for(let i =1; i<food.length; i++) {
      const str = food[i]%2 ===0 ? food[i] : food[i]-1
      const arr = new Array(str/2).fill(i).join('')
      result+=arr
    } 

  return  result += 0+result.split('').reverse().join('')

    
}