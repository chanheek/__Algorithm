function solution(n) {
    
    let result = 0;


        while(n !==1 && result !==500) {
          if(n%2 === 0) {
            n = n/2
          } else { 
            n = n*3+1
          }
          result++
        }
        return  result === 500 ? -1 : result
}