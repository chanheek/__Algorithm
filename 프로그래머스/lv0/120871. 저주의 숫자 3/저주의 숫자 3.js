function solution(n) {
     let count = 0;

    for(let i =1; i<=n; i++) {
    count++

    for(let j=0; j<=count; j++) {        
    if(count%3 === 0 || count.toString().includes('3')) {
        count++

            }
        }
    }
    return count
}