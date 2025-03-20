let person = {
    firstname: "Abc",
    lastname: "Xyz",
    age: 23,
}
let fulldetails = {
    details: function (city, city2) {
        return this.firstname + " " + this.lastname + " " + city + " " + city2;
    }
}
console.log(fulldetails.details.call(person, "Surat", "Vapi"))
console.log(fulldetails.details.apply(person, ["Surat", "Vapi"]))
