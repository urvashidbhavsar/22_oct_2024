// let student = class { 
class student {
    constructor(fname, lname) {
        // create this method for access for variables
        this.fname = fname
        this.lname = lname
    }

    printstud() {
        return `${this.fname} => ${this.lname}`
    }
}
// create instance
let s1 = new student("Manav", "Mistry")
console.log(s1.printstud())