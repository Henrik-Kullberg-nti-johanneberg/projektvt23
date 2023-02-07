// Denna fil skall innehålla JavaScript (JS)

const hamburger = document.querySelector("#hamburger")
const nav = document.querySelector("nav");

hamburger.addEventListener('doubleclick', toggleMenu)

function toggleMenu() {
    nav.classList.toggle("active")
}
