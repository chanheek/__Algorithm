function solution(hp) {
    
    let 장군 = parseInt(hp/5)
    let 장군나머지 = parseInt(hp%5)
    let 병정 = 장군나머지%3
    let 병정나머지 = parseInt(장군나머지/3)

    return 장군+병정+병정나머지
}