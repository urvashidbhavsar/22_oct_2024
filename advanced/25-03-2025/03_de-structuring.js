let leptop = ["dell", "hp", "acer", "lenovo", "mac"]
console.log(leptop[0])

// de-structuring
let [a1, a2, a3, a4, a5] = leptop
console.log(a1);
console.log(a3);

const person = {
    firstname: "Kishan",
    lastname: "Mistry",
    doj: "25-2-25"
}
console.log(person.firstname);

// de-strcutring
const { firstname, lastname, doj } = person
console.log(firstname);
console.log(lastname);




