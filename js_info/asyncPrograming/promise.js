// new Promise(executor)-------------------->
//                                           |  - resolve(value) => state: "fulfilled" result: value
//                                           |  - reject(error) =>  state: "rejected" result: error
// state: "pending" result: undefined------->

// let promise = new Promise(function (resolve, reject) {
//     // the function is executed automatically when the promise is constructed
//     setTimeout(() => {
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then((response) => { return response.json() })
//             .then((data) => resolve(data))
//             .catch((error) => reject(error))
//     }, 1000);
// });

// // resolve runs the first function in .then
// promise
//     .finally(() => console.log("Promise ready"))
//     .then(
//         (result) => console.log("result ", result),
//         (error) => console.log("error ", error)
//     )
//     .catch((error) => console.log(error));


setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .finally(() => console.log("Promise ready"))
        .then((response) => { return response.json() })
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
}, 1000);

setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/2')
        .finally(() => console.log("Promise ready"))
        .then((response) => { return response.json() })
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
}, 3000);

setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/3')
        .finally(() => console.log("Promise ready"))
        .then((response) => { return response.json() })
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
}, 1000);
// 1 and 3 will be executed at the same time and 2 will be executed after 2 seconds

/**
 * @real life exmple at htmlExample.js
**/