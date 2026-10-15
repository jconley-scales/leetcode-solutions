/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, ""); // cleans the original string
    let left = 0; // left pointer starts at beginning of string
    let right = cleaned.length - 1; // right pointer at end of string

    while (left < right) { //while the left pointer hasnt passed the right pointer
        if (cleaned[left] !== cleaned[right]) { // if left pointer != right pointer while loop ends 
            return false;
        }
        left++; // left pointer moves forward 
        right--; // right pointer moves backward
    }

    return true; // no issues means is a palindrome
};