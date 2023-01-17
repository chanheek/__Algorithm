function solution(dots) {
    let XdotsMap = dots.map(e => e[1])
    let YdotsMap = dots.map(e =>e[0])

    let maxX = Math.max(...XdotsMap)
    let minX = Math.min(...XdotsMap)


    let maxY= Math.max(...YdotsMap)
    let minY = Math.min(...YdotsMap)
    
    return (maxX-minX)*(maxY-minY)

}