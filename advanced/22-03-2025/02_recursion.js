// const decrement = (n) => {
//     if (n == 0) return
//     console.log(n)
//     decrement(n - 1);
// }
// decrement(10)

// ========================== 
const printnumber = (s, e) => {
    if (s == e) return
    if (s <= e) {
        console.log(s)
        printnumber(s + 1, e)
    }
}

// printnumber(1, 10)
printnumber(31, 45)
// printnumber(21, 21)