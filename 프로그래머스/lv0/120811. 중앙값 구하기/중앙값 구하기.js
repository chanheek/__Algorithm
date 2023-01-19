function solution(array) {
    return Number(array.sort((a,b) => b-a).slice(array.length/2,array.length/2+1))
}