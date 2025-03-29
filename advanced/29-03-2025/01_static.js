class student {
    studinfo() {
        console.log("student method called")
    }
}
var s1 = new student()
s1.studinfo()

// =================================================== 
class student1 {
    static studinfo() {
        console.log("student method called")
    }
}
student1.studinfo()

// =================================================== 
class student2 {
    static studinfo() {
        console.log("student method called")
    }
    static studinfo() {
        console.log("another student method called")
    }
}
student2.studinfo()

// ====================================================
class student3 {
    static studinfo() {
        console.log("this static method called in another static method")
    }
    static studentinfo() {
        this.studinfo()
    }
    // console.log("student method called")
}
student3.studentinfo()
student3.studinfo()

// ===================== This code shows error ==========================
class student4 {
    static studinfo() {
        console.log("non static method called in another static method")
    }
    studentinfo() {
        studinfo()
    }
    // console.log("student method called")
}
let s2 = new student4()
s2.studentinfo()