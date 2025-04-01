class main {
    msg() {
        console.log("Main class invoke")
    }
}
class sub extends main {

}
let s1 = new sub()
s1.msg()

// ============================================ 
class main1 {
    msg() {
        console.log("Main class invoke")
    }
}
class sub1 extends main1 {
    msg() {
        console.log("child class invoke")
    }
}
// let s1 = new sub()
let s2 = [new main1(), new sub1()]
s2.forEach(a =>
    a.msg()
)

//=====================================
class employee {
    details() {
        console.log("Employee Details")
    }
    details(sal) {
        console.log(`Employee Salary : ${sal}`)
    }
}
let e1 = new employee()
console.log(e1)
e1.details(20000)
let data = Object.entries(e1);
console.log(data);