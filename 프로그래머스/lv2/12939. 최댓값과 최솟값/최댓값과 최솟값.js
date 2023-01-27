function solution(s) {
   
    let sort = s.split(' ').map(e => Number(e)).sort((a,b) => a-b)


    let result = [sort[0],sort[sort.length-1]]
   
    return result.join(' ')
}