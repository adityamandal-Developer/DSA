// Write a function called oddball_sum which takes in a list of numbers
// and returns the sum of all the odd elements.
// Try to solve with and without reduce function.


const addOddNumbers = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i]
        }
    }
    return sum
}

const addOddNumbers_reduce = (arr) => {
    const sum = arr.filter((ele) => ele % 2 !== 0).reduce((a, b) => a + b)
    return sum
}

console.log(addOddNumbers_reduce([1, 2, 3, 4, 5]))