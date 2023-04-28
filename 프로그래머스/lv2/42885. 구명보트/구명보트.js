function solution(people, limit) {
     people.sort((a,b) => a-b);

  let result = 0;

  while(people.length !== 0) {
    if(people[0]+people[people.length-1] <= limit) {
      people.pop()
      people.shift()
    } else {
      people.pop()
    }
      result++
  }
    return result
}