function solution(k, m, score) {
     score.sort((a,b) => b-a)
    let arr =[];
    const max = Math.ceil(score.length/m)

    for(let i =0; i<max; i++) {
      
      if(score.slice(i * m, (i + 1) * m).length ===m) {
        const index = score.slice(i * m, (i + 1) * m)
        index
        const min = Math.min(...index)
        arr.push(index.length*min)
      }  
    }
    return arr.reduce((a,b) =>a+b,0)

}