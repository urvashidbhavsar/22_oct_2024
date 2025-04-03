let stud = new Promise((resolve, reject) => {
    let mark = "pass"
    if (mark == "pass") {
        resolve("You are pass")
    } else {
        reject("You are fail")
    }
})
    .then(res => console.log(res))
    .catch(rej => console.log(rej))