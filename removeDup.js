'use strict';

const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log("Orignal Array " + arr1);


/**
 @Modern Way
**/

const removeDup1 = [...new Set(arr1)]
console.log(removeDup1);


/**
 @Classic Way
**/
const removeDup = [];
for (let i = 0; i < arr1.length; i++) {
    let currentValue = arr1[i]
    if (currentValue !== arr1[i + 1]) {
        removeDup.push(arr1[i])
    }
}

console.log(removeDup);