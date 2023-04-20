function solution(arr, k) {
    
    const nums = new Set();
    
    const result = [];
    
    for(let i=0; i<arr.length; i++){
        if(nums.has(arr[i])) continue;
        nums.add(arr[i]);
        result.push(arr[i]);
        if(result.length === k) return result;
    }
    while(result.length < k){
        result.push(-1);
    }

    return result;
}