const bubbleSort = function (array) {
    let swaps;
    do {
        swaps = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = temp;
                swaps = true;
            }
        }
    } while (swaps);

    return array;
};

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(bubbleSort(arr))

