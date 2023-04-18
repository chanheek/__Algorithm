function solution(nums) {
    
    const set = new Set(nums);
    
    const numsLength = nums.length/2

    return set.size > numsLength ? numsLength : set.size
}