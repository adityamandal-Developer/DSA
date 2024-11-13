//closure
function outerFunction() {
    let outerVariable = 10;

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const inner = outerFunction();
inner(); // Output: 10