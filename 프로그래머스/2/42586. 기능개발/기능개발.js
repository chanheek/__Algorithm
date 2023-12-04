function solution(progresses, speeds) {
    let dday = new Array(progresses.length).fill(0)
    let result = [];
    let maxday = 0;

    for(let i =0; i<progresses.length; i++) {
      while(progresses[i] < 100) {
        progresses[i] = progresses[i]+speeds[i]
        dday[i]++
          }
        }
 
    
    for(let i =0; i<dday.length; i++) {
      if(maxday<dday[i]) {
        result.push(1)
        maxday = dday[i]
      } else {
        let cnt = result.pop();
        result.push(++cnt)
      }
    }
    return result
}