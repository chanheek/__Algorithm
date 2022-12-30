function solution(order) {
    
    let ordery = String(order).split('')
    let sum = 0;
    
    for(let i = 0; i<ordery.length; i++) {
        if(ordery[i] === '3' ||ordery[i] === '6' ||ordery[i] ==='9') {
            sum++
        }
    }
        return sum
}