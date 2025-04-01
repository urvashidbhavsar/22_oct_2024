// function student(fulldata) {
//     this.fulldata = fulldata
//     throw new Error("You can't create instant of abtract class")
// }
// student.prototype.showdata = function () {
//     console.log(`Details : ${this.fulldata}`);
// }
// let stud1 = new student("Xyz");
// stud1.showdata()

class student {
    constructor(fulldata) {
        this.fulldata = fulldata;
        throw new Error("You can't create instant of abtract class");
    }
    showdata() {
        console.log(`Details : ${this.fulldata}`);
    }
}
let stud1 = new student("Xyz");
stud1.showdata()