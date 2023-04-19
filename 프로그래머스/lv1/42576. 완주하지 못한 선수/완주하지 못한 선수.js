function solution(participant, completion) {
    
    let hashTable = {};

    for (let i = 0; i < participant.length; i++) {
        if (!hashTable[participant[i]]) {
            hashTable[participant[i]] = 1;
        } else {
            hashTable[participant[i]]++;
        }
    }

    for (let i = 0; i < completion.length; i++) {
        hashTable[completion[i]]--;
    }

    for (let key in hashTable) {
        if (hashTable[key] > 0) {
            return key;
        }
    }
}