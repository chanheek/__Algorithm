function solution(array, commands) {
    
    
let result = [];



for(let i =0; i<commands.length; i++) {
  const [s,e,k] = commands[i]
  const arr = array.slice(s-1,e).sort((a,b) => a-b)
  result.push(arr[k-1])
}
    return result

}