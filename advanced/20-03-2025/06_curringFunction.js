function addition(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
console.log(addition(4)(5)(7))
// addition()