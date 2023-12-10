function solution(sizes) {
    

    let max = []
    let min = []


    for(let i =0; i<sizes.length; i++) {
      let width = Math.max(...sizes[i])
      let height = Math.min(...sizes[i])

      max.push(width)
       min.push(height)

    }
    return Math.max(...max)*Math.max(...min)
}