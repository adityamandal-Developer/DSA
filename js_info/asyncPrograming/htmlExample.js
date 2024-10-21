/**
 * @real example (for html + js)
 *
 * */


// function loadScript(src) {
//     return new Promise(function (resolve, reject) {
//         let script = document.createElement('script');
//         script.src = src;

//         script.onload = () => resolve(script);
//         script.onerror = () => reject(new Error(`Script load error for ${src}`));

//         document.head.append(script);
//     });
// }

// let promise2 = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

// promise2.then(
//     script => alert(`${script.src} is loaded!`),
//     error => alert(`Error: ${error.message}`)
// );

// promise2.then(script => alert('Another handler...'));




/**
 * @Promise .all 
 *
 * */

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

let requests = urls.map(url => fetch(url))

Promise.all(requests)
    .then((resposes) => resposes.forEach(res => console.log(res.status)))
    .catch((error) => console.log(error))