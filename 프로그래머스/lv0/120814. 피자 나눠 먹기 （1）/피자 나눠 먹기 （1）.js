function solution(n) {
    return n%7 === 0 ? n/7 : Math.ceil(n/7)    
}
// n 11
// n%7 === 0 - 1 
// n%7 !== 0 ?? - n/7 =  (11/7) 1.xxxx = 2 