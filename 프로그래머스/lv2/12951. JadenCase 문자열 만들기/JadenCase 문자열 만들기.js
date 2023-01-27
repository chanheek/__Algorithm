function solution(s) {
    let lower = s.toLowerCase()

    let result = lower.split(' ').map(e=> {
        let F = e.split('')
        if(F[0]) {
            F[0] = F[0].toUpperCase();
        }
        return F.join('')
    })
    return result.join(' ')
}