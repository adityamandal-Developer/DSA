var isPalindrome = function (head) {
    let stack = []

    for (let char of head) {
        stack.push(char)
    }
    for (let i = 0; i < head.length; i++) {
        if (stack.pop() !== head[i]) {
            return false
        } else return true
    }
};

console.log(isPalindrome([1, 2, 2, 1]))
console.log(isPalindrome([1, 2]))