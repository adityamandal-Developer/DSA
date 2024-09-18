// You will be given an array of several arrays that
// each contain integers and your goal is to write a function that will sum up all the numbers in all the arrays.
// For example, if the input is [[3, 2], [1], [4, 12]]
// then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22.
// Solve without and with reduce.

// const sumOfNestedArray = (arr) => {
//     flattedArray = arr.flat()
//     console.log(flattedArray)
//     let sum = 0
//     for (i = 0; i < flattedArray.length; i++) {
//         console.log(flattedArray[i])
//         sum += flattedArray[i]
//     } return sum
// }

// const sumOfNestedArray = (arr) => {
//     if (!Array.isArray(arr)) {
//         return "Not possible"
//     }
//     flattedArray = arr.flat(depth)

//     return flattedArray.reduce((a, b) => a + b)
// }


// console.log(sumOfNestedArray([1, [2, [3, 4]], 5]))

const sumOfNestedArray = (arr) => {
    let maxDepth = 1;

    const getArrayDepth = (arr) => {
        if (!Array.isArray(arr)) {
            return 0;
        }


        for (const element of arr) {

            if (Array.isArray(element)) {
                console.log(element)
                maxDepth = 1 + getArrayDepth(element);
            }
        }
        console.log(maxDepth)
        return maxDepth;
    };

    getArrayDepth(arr)

    const flattedArray = arr.flat(maxDepth)

    return flattedArray.reduce((a, b) => a + b)

}



const nestedArray = [1, [2, [3, [2, 5, 6, 8], 4]], 5];
console.log(sumOfNestedArray(nestedArray));  