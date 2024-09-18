// Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7.

const lucky_Seven = (arr) => {
    if (arr.length < 3) {
        return "Not possible"
    }
    for (i = 0; i < arr.length; i++) {
        if ((arr[i] + arr[i + 1] + arr[i + 2]) === 7) {
            console.log(arr[i], arr[i + 1], arr[i + 2] + " = 7");
            return true
        }

    }
    return false
}



const arr1 = [1, 3, 2, 0, 3, 4, 5, 9]
lucky_Seven(arr1)