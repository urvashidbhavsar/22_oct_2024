const myFunc = () => {
    return new Promise((res, rej) => {
        let a = 120;
        setTimeout(() => {
            if (a < 100) {
                res("Hello world!!!!!")
            } else {
                rej("come back again........!!!")
            }
        }, 2000)
    })
        .then(res => console.log(res))
        .catch(rej => console.log(rej))
}
myFunc();
// console.log(myFunc())

const myFunc1 = async () => {
    setTimeout(() => {
        console.log("Welcome....");
    }, 5000)
}
myFunc1();

const myFunc2 = async () => {
    await myFunc();
    // console.log(wait);
}
myFunc2()