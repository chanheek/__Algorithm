function solution(array, commands) {
   let result = [];
    
    for(let i = 0; i<commands.length; i++) {
        const [s,e,n] = commands[i]
        const test = array.slice(s-1,e).sort((a,b) => a-b)
        const out = test[n-1]
        result.push(out)
    }
        return result
}