'use strict';

const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDup = [];
for (let i = 0; i < arr1.length; i++) {
    let currentValue = arr1[i]
    if (currentValue !== arr1[i + 1]) {
        removeDup.push(arr1[i])
    }
}

console.log(arr1);
console.log(removeDup);