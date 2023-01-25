function solution(polynomial) {
    
    let polyArray = polynomial.split(' + ')
    let xsum = 0
    let sum = polyArray.filter(e => Number(e)).reduce((a, b) => Number(a) + Number(b), 0)  

    for (let i = 0; i < polyArray.length; i++) {
        if (polyArray[i].includes('x')) {
            if (parseInt(polyArray[i])) {
                xsum += parseInt(polyArray[i])
            } else {
                xsum += 1
            }
        }
    }
    
     if (polynomial === 'x') return 'x'
    if (xsum === 1) return `x + ${sum}`
    if (sum !== 0 && xsum !== 0) return `${xsum}x + ${sum}`
    if (sum === 0 && xsum !== 0) return `${xsum}x`
    if (xsum === 0 && sum !== 0) return `${sum}`
    
}