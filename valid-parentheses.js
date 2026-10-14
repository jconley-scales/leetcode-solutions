/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const pairs = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"]
    ]);

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (pairs.has(char)) {              
            const top = stack.pop();
            if (top !== pairs.get(char)) {
                return false;
            }
        } else {                            
            stack.push(char);
        }
    }
    return stack.length == 0;
};