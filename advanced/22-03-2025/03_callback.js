function myfunc(msg, msg1) {
    msg();
    msg1();
}
function message() {
    console.log("Hello");
}
function newfunc() {
    console.log("another function")
}
myfunc(message, newfunc);
// myfunc(message(), newfunc());

// setInterval(()=>{})

function getData(x, y, callback) {
    console.log(`<div>The multiplication of the numbers ${x} and ${y} is : (${x
        + y})</div>`);
    callback()
}
function showData() {
    console.log("Execute function");
}
getData(20, 30, showData)