const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // [3, 42, 'foo']
});

async function foo() {
    return new Promise((resolve) => {
        resolve("hello world")
    })
}

const result = foo()
result.then((res) => console.log(res))

