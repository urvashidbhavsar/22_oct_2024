function addition(...numbers) {
    const result = numbers.reduce((tot, curr) => {
        return tot + curr
    }, 0)
    return result;
}

console.log(addition(3, 4, 5, 6, 9, 2, 10))
console.log(addition(3, 4, 5, 6, 9, 2, 10, 1000))
