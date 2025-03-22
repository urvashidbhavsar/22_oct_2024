const add = (() => {
    let count = 1;

    return function () {
        console.log(count)
    }
})
add()()
// =========================

const addition = () => {
    let a = 4, b = 5;

    return function () {
        console.log(a + b)
    }
}
addition()()

// =====================
function myfunction() {
    var a = 1;

    return function newfunction() {
        a++
        console.log(a)
    }
}
let data = myfunction()
data()
