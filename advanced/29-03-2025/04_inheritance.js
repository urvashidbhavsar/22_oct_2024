// class Brand {
//     constructor(bname) {
//         this.bname = bname;
//     }
// }
// class Product extends Brand {
//     constructor(pname, price) {
//         super("Levi's")
//         this.pname = pname;
//         this.price = price;
//     }
// }
// let p1 = new Product("shirts", 4599);
// console.log(p1)
// console.log(p1.bname + " " + p1.pname + " " + p1.price)

// ============================
class Brand {
    constructor(bname) {
        this.brandname = bname;
    }
}
class Product extends Brand {
    constructor(brand, pname, price) {
        super(brand)
        this.pname = pname;
        this.price = price;
    }
}
let p1 = new Product("Levi's", "shirts", 4599);
console.log(p1)
console.log(p1.brandname + " " + p1.pname + " " + p1.price)