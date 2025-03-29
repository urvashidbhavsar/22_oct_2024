class employee {
    // constructor(ename, salary) {
    //     this.ename = ename;
    //     this.salary = salary;
    // }
    constructor() {
        let ename, salary;
    }
    getName() {
        return this.ename;
    }
    setName(ename) {
        this.ename = ename;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(salary) {
        this.salary = salary;
    }
}
// let emp = new employee("Abc", 40000)
let emp = new employee()
emp.setName("Abc");
emp.setSalary(40000)

console.log(emp.getName())
console.log(emp.getSalary())