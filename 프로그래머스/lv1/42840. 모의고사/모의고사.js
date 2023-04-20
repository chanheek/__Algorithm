function solution(answers) {
    let result = [];
    let count = [0,0,0];
    
    let MathOne = [1,2,3,4,5];
    let MathTwo = [2,1,2,3,2,4,2,5];
    let MathThree = [3,3,1,1,2,2,4,4,5,5];
    
    for(let i = 0; i<answers.length; i++) {
        if(answers[i] === MathOne[i%MathOne.length]) {
            count[0]++
        }
        if(answers[i] === MathTwo[i%MathTwo.length]) {
            count[1]++
        }
        if(answers[i] === MathThree[i%MathThree.length]) {
            count[2]++
        }
    }
    let max = Math.max(...count);
    
    for(let i = 0; i<count.length; i++) {
        if(max == count[i]) {
            result.push(i+1)
        }
    }
    return result
}