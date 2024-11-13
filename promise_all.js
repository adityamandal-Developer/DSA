// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values); // [3, 42, 'foo']
// });

// async function foo() {
//     return new Promise((resolve) => {
//         resolve("hello world")
//     })
// }

// const result = foo()
// result.then((res) => console.log(res))

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = nums.filter((num) => num > 3)
    .map((num) => num + 5)
    .reduce((a, b) => a + b)

console.log(newNums)

const str = "hi i am aditya"
const newStr = str.split("")

function convert(newStr) {
    newStr[0] = newStr[0].toUpperCase()
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === " " && newStr[i + 1]) {
            newStr[i + 1] = newStr[i + 1].toUpperCase()
        }
    }
    return newStr.join("")
}


console.log(convert(newStr))