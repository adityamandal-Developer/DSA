const nextGreatestElement = (nums1, nums2) => {
    const stack = []
    let count = 0
    for (let char of nums1) {
        let found = false
        for (let j = 0; j < nums2.length; j++) {
            const valInNum2 = nums2.indexOf(char)
            if (nums2[valInNum2 + 1] > char) {
                stack.push(nums2[valInNum2 + 1])
                found = true;
                break
            }

        }
        if (!found) {
            stack.push(-1)
        }
    }
    return stack
}

console.log(nextGreatestElement([4, 1, 2], [1, 3, 4, 2]))
console.log(nextGreatestElement([2, 4], [1, 2, 3, 4]))
console.log(nextGreatestElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]))