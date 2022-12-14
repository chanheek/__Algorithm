function solution(num_list) {
    let result = [];
    let J = 0;
    let H = 0;
    for (let i = 0; i<num_list.length; i ++) {
        if(num_list[i]%2 ===0) {
            J++
        }else {
            H++
        }
     }
        result.push(J)
    result.push(H)
    return result
}
// 짝 ++ 홀 ++
// 