function solution(nums) {
    var answer = 0;
    let maxNum = parseInt(nums.length/2);
    let set = new Set(nums);
    if (set.size >= maxNum) return maxNum;
    else return set.size;
}