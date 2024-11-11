// Matrix with Coordinates:

// (0,0) 0   (0,1) 1   (0,2) 1   (0,3) 1
// (1,0) 1   (1,1) 1   (1,2) 1   (1,3) 1
// (2,0) 0   (2,1) 1   (2,2) 1   (2,3) 1


/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
    // let squareCount = 0
    // let squaresCount = [];
    // for (let i = 0; i < matrix.length; i++) {
    //     for (let j = 0; j < matrix[i].length; j++) {
    //         if (matrix[i][j] === 1){

    //         }
    //             if ((matrix[i][j] === 1 && i > 0 && j > 0)) {
    //                 if ((matrix[i][j] + matrix[i][j - 1] + matrix[i - 1][j] + matrix[i - 1][j - 1]) === 4) {
    //                     squareCount++
    //                     continue
    //                 }
    //                 else if ((matrix[i][j] + matrix[i][j - 1] + matrix[i - 1][j] + matrix[i - 1][j - 1]) === 4) {

    //                 }
    //             }
    //     }
    // Get dimensions of the matrix
    const n = matrix.length;    // number of rows
    const m = matrix[0].length; // number of columns

    // Create a DP table with same dimensions as matrix
    const dp = Array(n).fill().map(() => Array(m).fill(0));
    return dp
}
//     squaresCount.push(squareCount)
//     return squaresCount
// };

console.log(countSquares([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1]
]))