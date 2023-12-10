function solution(n, lost, reserve) {
    // let arr = [...lost,...reserve].sort((a,b) => a-b)
    let rearr = new Array(n).fill(1)
    let result =0

    for(let i =0; i<reserve.length; i++) {
      rearr[reserve[i]-1]++
    }
    for(let i =0; i<lost.length; i++) {
      rearr[lost[i]-1]--
    }

    for(let i =0; i<rearr.length; i++) {
      if(rearr[i] === 2 && rearr[i-1] !== undefined && rearr[i-1] !==1 && rearr[i-1] !==2) {
          rearr[i] = 1
          rearr[i-1] = 1
      } else if (rearr[i] === 2 && rearr[i+1]!== undefined && rearr[i+1] !==1 && rearr[i+1] !==2) {
        rearr[i] =1
        rearr[i+1]= 1
      }
    }
    for(let i =0; i<rearr.length; i++) {
      if(rearr[i]) {
        result += 1
      }
    }
    return result
}