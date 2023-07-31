function solution(s) {
   
    let result =[]


    let arr= s.split(' ').map((e) => Number(e))

    let max = Math.max(...arr)
    let min = Math.min(...arr)

    result.push(min)
    result.push(max)
    
    return result.join(' ')

}