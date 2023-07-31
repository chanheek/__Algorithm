function solution(n, words) {
  let answer = [0, 0];
  let usedWords = [words[0]];
  let turn = 1;
  
  for (let i = 1; i < words.length; i++) {
    let prevWord = words[i-1];
    let currWord = words[i];
    let prevLastChar = prevWord[prevWord.length-1];
    let currFirstChar = currWord[0];
    
    // 현재 단어가 이전에 나온 단어인 경우
    if (usedWords.includes(currWord)) {
      answer = [(i % n) + 1, Math.ceil((i+1) / n)];
      break;
    }
    
    // 이전 단어의 마지막 글자와 현재 단어의 첫 글자가 일치하지 않는 경우
    if (prevLastChar !== currFirstChar) {
      answer = [(i % n) + 1, Math.ceil((i+1) / n)];
      break;
    }
    
    // 모든 조건을 만족한 경우
    usedWords.push(currWord);
    turn++;
  }
  
  return answer;
}