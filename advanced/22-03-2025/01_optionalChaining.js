let person = {
    firstname: "Abc",
    lastname: "Xyz",
    address: {
        city: {
            town: "Surat",
        },
        state: "MH",
    }
}
// if (person.address && person.address.city === "Surat") {
if (person.address?.city?.town === "Surat") {
    console.log("City exist")
} else {
    console.log("City not exist")
}