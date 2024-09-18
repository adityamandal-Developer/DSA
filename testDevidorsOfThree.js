// You will be given 2 parameters: a low and high number.
// Your goal is to print all numbers between low and high,
// and for each of these numbers print whether or not the number is divisible by 3.
// If the number is divisible by 3, print the word "div3" directly after the number.

const test_devisors = (low, high) => {
    const output = []
    for (let i = low; i <= high; i++) {

        if (i % 3 === 0) output.push(i + " div3")
        else {
            output.push(i)
        }
    }
    return output
}


console.log(test_devisors(1, 10))
class Animal {
    static belly = [];
    eat(food) {
        Animal.belly.push(food);
    }
}

let a = new Animal()
a.eat("food")
console.log(a.belly)