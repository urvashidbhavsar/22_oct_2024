let num = [10, 20, 30, 40, 50, 60]
let res = num.reduce((total, curr) => {
    return total += curr
}, 100)
console.log(res);
