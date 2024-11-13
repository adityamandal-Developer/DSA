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