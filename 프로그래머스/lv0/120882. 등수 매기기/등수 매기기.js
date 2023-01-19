function solution(score) {
    
    let scoreMap= score.map(e=> (e[0]+e[1])/2)

    let scoreRank = scoreMap.slice().sort((a,b) => b-a)


    return scoreMap.map(e => scoreRank.indexOf(e)+1)

}