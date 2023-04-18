function solution(numbers) {
    const result = numbers
    .map((e) => e.toString())
    .sort((a,b) => (b+a) - (a+b))
    .join('')
    
    return result[0] ==='0' ? '0' : result
}