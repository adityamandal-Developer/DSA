/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let indices = {}
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]

        if (indices.hasOwnProperty(diff)) {
            return [indices[diff], i]
        }
        indices[nums[i]] = i
    }
    return null
};

console.log(twoSum([2, 7, 1, 8, 10], 11))
