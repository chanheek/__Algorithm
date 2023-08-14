let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0 ])
let m = Number(input[1])


let graph = [];
for(let i= 1; i<=n; i++) graph[i]=[];

for(let i =2; i<=m+1; i++) {
  let [x,y] = input[i].split(' ').map(Number)
  graph[x].push(y)
  graph[y].push(x)
}
let visited = Array(n+1).fill(false)


let result =0;
function dfs(x){
  visited[x] = true
  result++
  for(y of graph[x]){
    if(!visited[y]) dfs(y)
  }
}

dfs(1)
console.log(result-1)