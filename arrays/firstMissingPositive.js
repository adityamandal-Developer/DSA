// const findMissingNum = (arr) => {
//     let missingNumber = 1
//     newArr = Array.from(new Set(arr)).sort((a, b) => a - b).filter(num => num > 0)
//     for (let i = 0; i < newArr.length; i++) {
//         if (newArr[i] !== missingNumber) {
//             return missingNumber
//         } missingNumber++
//     }
//     return missingNumber
// }

// console.log(findMissingNum([1, 2, 0]))
// console.log(findMissingNum([3, 4, -1, 1]))
// console.log(findMissingNum([7, 8, 9, 11, 12]))
// console.log(findMissingNum([1, 2, 3, 15, 4000, 99999, 100000,]))

// function sumTo(n) {
//     if (n === 0) {
//         return n
//     }
//     return n + sumTo(n - 1)
// }

// console.log(sumTo(100));


// function curry(fn) {
//     return function (a) {
//         return function (b) {
//             return fn(a, b)
//         }
//     }
// }

// function sum(a, b) {
//     return a + b
// }

// const curriedSum = curry(sum)

// console.log(curriedSum(1)(2))

// function maxSumArray(arr) {
//     let currentSum = arr[0]
//     let maxSum = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         currentSum = Math.max(arr[i], arr[i] + currentSum)
//         maxSum = Math.max(maxSum, currentSum)
//     }
//     return maxSum
// }

// console.log(maxSumArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

async function sleep(millis) {
    setTimeout(() => {
        return null
    }, millis)
}

console.log(sleep(100).then(() => {
    let t = Date.now()
    console.log(Date.now() - t); // 100
}));