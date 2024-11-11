// /**
//  * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//  An input string is valid if:

//  Open brackets must be closed by the same type of brackets.
//  Open brackets must be closed in the correct order.
//  Every close bracket has a corresponding open bracket of the same type.


//  Example 1:

//  Input: s = "()"

//  Output: true

//  Example 2:

//  Input: s = "()[]{}"

//  Output: true

//  Example 3:

//  Input: s = "(]"

//  Output: false

//  Example 4:

//  Input: s = "([])"

//  Output: true



//  Constraints:

//  1 <= s.length <= 104
//  s consists of parentheses only '()[]{}'.
//  * @param {string} s
//  * @return {boolean}
//  */

function isValid(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        // If we find a closing bracket
        if (pairs[char]) {
            // If stack is empty - Invalid!
            if (stack.length === 0) {
                return false;
            }

            // Get the last opening bracket we saw
            let lastBracket = stack[stack.length - 1];

            // Get the opening bracket we need
            let needBracket = pairs[char];

            // If they don't match - Invalid!
            if (lastBracket !== needBracket) {
                return false;
            }

            // If they match, remove the opening bracket
            stack.pop();
        } else {
            // If it's an opening bracket, add to stack
            stack.push(char);
        }
    }

    // If stack is empty, all brackets matched!
    return stack.length === 0;
}

console.log(isValid("()}{}]})"));
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("([])")); 
