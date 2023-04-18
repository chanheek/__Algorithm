function solution(array, commands) {
    
    const result = [];

    for (let i = 0; i < commands.length; i++) {

        const [start, end, k] = commands[i];

        const arr = array.slice(start - 1, end).sort((a, b) => a - b);

        result.push(arr[k - 1]);
    }
    
    return result;
}