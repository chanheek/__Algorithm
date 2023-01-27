function solution(arr, divisor) {
    
     
    let result = arr.filter((e) => {
        if(e%divisor ===0) return e
    }).sort((a,b) => a-b)

    return result.length === 0 ? [-1] : result

}