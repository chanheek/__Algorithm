function solution(a, b) {
   let sum = Number(a.toString()+b.toString());
    
    return sum >= 2*a*b ? sum : 2*a*b;
}