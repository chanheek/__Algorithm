function solution(absolutes, signs) {
    
    let result = 0;

// 사인 배열을 for 문 돌려서 false면 해당 인덱스 값에 -1 할당


for(let i =0; i< signs.length; i++) {
  if(!signs[i]) {
    absolutes[i] = -absolutes[i]
  }
  result += absolutes[i]
}

    return result
}