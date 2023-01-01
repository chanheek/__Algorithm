function solution(cipher, code) {
    
    let result = [];

    for(let i =code-1; i<cipher.length; i+=code) {
        result.push(cipher[i])
    }


    return result.join('')
}