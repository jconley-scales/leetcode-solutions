var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const countS = new Map();
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        if (countS.has(letter)) {
            countS.set(letter, countS.get(letter) + 1);
        } else {
            countS.set(letter, 1);
        }
    }

    const countT = new Map();
    for (let i = 0; i < t.length; i++) {
        const letter = t[i];
        if (countT.has(letter)) {
            countT.set(letter, countT.get(letter) + 1);
        } else {
            countT.set(letter, 1);
        }
    }

        for (const [letter, count] of countS) {
        if (countT.get(letter) !== count) {
            return false;
        }
    }
    return true;
};