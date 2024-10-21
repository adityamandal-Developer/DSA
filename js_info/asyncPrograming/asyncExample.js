'use strict'
function operation1() {
    console.log('operation1')
}
operation1()

function operation2() {
    let i = 0
    while (i < 10) {
        i++
        console.log(i)
    }
    console.log('operation2')
}
operation2()

function operation3() {
    console.log('operation3')
}
operation3()




function operation1() {
    console.log('operation1')
}
operation1()

setTimeout(() => {
    let i = 0
    while (i < 10) {
        i++
        console.log(i)
    }
    console.log('operation2')
})

function operation3() {
    console.log('operation3')
}
operation3()