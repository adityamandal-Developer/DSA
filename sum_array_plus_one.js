// Write a function that takes an array of integers
// and returns the sum of the integers after adding 1 to each.

const sumPlusOne = (arr) => {
    let newArr = arr.map((ele) => ele + 1).reduce((a, b) => a + b)
    return newArr
}

const sumPlusOne2 = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + 1)
    }

    return newArr.reduce((a, b) => a + b)
}

console.log(sumPlusOne([1, 2, 3]))
console.log(sumPlusOne2([1, 2, 3]))