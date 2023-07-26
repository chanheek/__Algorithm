function solution(array, commands) {
    
    
let result =[];


for(let i =0; i<commands.length; i++) {
  const [s,t,k] =commands[i]
  const push = array.slice(s-1,t).sort((a,b) => a-b);
  result.push(push[k-1])
}

return result 

}