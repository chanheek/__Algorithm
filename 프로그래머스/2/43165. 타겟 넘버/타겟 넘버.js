function solution(numbers, target) {
    let result =0;
const length = numbers.length

function dfs (count , sum) {
      // 탈출조건
    if(count === length) {
      if(sum ===  target ){
        result++
      }
      return;
    }

     // 시행조건 
     dfs(count+1, sum + numbers[count])
     dfs(count+1, sum - numbers[count])
    }

    dfs(0,0)

    return result
}