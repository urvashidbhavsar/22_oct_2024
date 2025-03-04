function showmenu() {
    let nav = document.querySelector(".nav")
    nav.classList.toggle("show")
}

let header = document.querySelector("header");
window.addEventListener("scroll", () => {
    let current = window.scrollY;
    if (current > 0) {
        header.classList.add("changeheader")
    } else {
        header.classList.remove("changeheader")
    }
})