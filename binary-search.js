/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0; // start marker
    let right = nums.length - 1; // end marker

    while (left <= right) { // keeps searching while theres search area
        const middle = Math.floor((left + right) / 2); // middle of list

        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            left = middle + 1; // if middle is too low left half is scrapped
        } else {
            right = middle - 1; // if middle is too high throw away right half
        }
    }

    return -1; //left passed right means its not in the list