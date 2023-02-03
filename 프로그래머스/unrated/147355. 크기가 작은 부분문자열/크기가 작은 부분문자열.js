function solution(t, p) {
    
    let count = 0;

    for (let i =0; i<t.length-p.length+1; i++) {
         let Tslice = t.slice(i,i+p.length)
        if(Tslice <= p) {
            count++
        }
    }
    return count

}