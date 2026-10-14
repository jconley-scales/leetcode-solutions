/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const partner = target - num;
        if (seen.has(partner)){
            return [seen.get(partner), i];
        } else {
            seen.set(num, i);
        }    
    }
    return null;
};