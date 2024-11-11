
let maxLength = 0;
let currentLength = 1;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] - 1) {
        currentLength++;
    } else {
        maxLength = Math.max(maxLength, currentLength);
        currentLength = 1;
    }
}

maxLength = Math.max(maxLength, currentLength);
console.log(maxLength)