function solution(a, b, n) {
    let result =0;

    while(n >= a) {
      result += parseInt((n/a))*b
        n = parseInt((n/a))*b + n%a
    }
   return result
}