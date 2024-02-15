function solution(players, callings) {
    
    let result = [];
    const race = {}

    for(let i =0; i<players.length; i++) {
      race[players[i]] = i
    }


    for(let i = 0; i<callings.length; i++) {
      const index = race[callings[i]];
      const temp = players[index-1]

      players[index-1] = callings[i]
      players[index] = temp

      race[callings[i]] = index-1
      race[temp] = index
    }
   return players
}