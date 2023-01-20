function solution(numlist, n) {
    
        let numsort = numlist.sort(function(a,b){
            
        if(Math.abs(a-n) === Math.abs(b-n)) {
            return b-a
        } 
        return Math.abs(a-n) - Math.abs(b-n)
    })
        return numsort
}