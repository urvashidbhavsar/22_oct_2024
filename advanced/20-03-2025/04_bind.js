let person1 = {
    firstname: "Hitesh",
    lastname: "Patel",
    age: 24,
    fullname: function () {
        return this.firstname + " " + this.lastname
    }
}
let person2 = {
    firstname: "Manav",
    lastname: "Mistry",
    age: 23,
    ageData: function () {
        return this.age
    }
}

let details = person1.fullname.bind(person2)
console.log(details());
let age = person2.ageData.bind(person1)
console.log(age());
console.log(person2.age);



