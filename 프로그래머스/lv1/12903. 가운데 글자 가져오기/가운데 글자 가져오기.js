function solution(s) {
    
    let result =''
    
   
return  s.length%2 !==0 ? result = s[Math.floor(s.length/2)] : result = s[s.length/2-1]+s[s.length/2]
}