function solution(s) {
    
    let list = ['zero', 'one', 'two', 'three','four', 'five' ,'six' ,'seven','eight' ,'nine']

for(let i = 0; i<list.length; i++) {
    let arr = s.split(list[i])
    s = arr.join(i)
}

    return Number(s)

}