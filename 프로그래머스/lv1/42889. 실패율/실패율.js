function solution(N, stages) {
    
    let users = stages.length
    let result = [];

// 1. 각 스테이지의 실패율을 구한다.
// 2. 구한 실패율을 스테이지의 맞게 할당하고 새로운 배열에 내림차순으로 리턴


for(let i = 1; i<=N; i++) {
    let stagesUsers = stages.filter(e=> e===i).length
        
    let failureRate = stagesUsers/users
    
    users -= stagesUsers
    
    result.push({stages:i , failureRate})
    }

    result.sort((a,b) => {
        if(a.failureRate === b.failureRate) return a.stages-b.stages
        else return b.failureRate - a.failureRate
    })
    return result.map(e=> e.stages)
}