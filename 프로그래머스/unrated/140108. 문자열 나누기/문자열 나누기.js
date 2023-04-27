function solution(s) {
    
     let result = 0;
  let idx = 0;
  while (idx < s.length) {
      let count1 = 0;
      let count2 = 0;
      
      for (let i = idx; i < s.length; i++) {
          if (s[i] === s[idx]) {
              count1++;
          } else {
              count2++;
          }
        
          if (count1 === count2) {
              idx = i + 1;
              result++;
              break;
          }
          if (i === s.length - 1) {
              idx = s.length;
              result++;
              break;
          }
      }
  }
  return result;


}