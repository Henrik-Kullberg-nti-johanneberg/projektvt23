// Denna fil skall innehålla JavaScript (JS)

const hamburger = document.querySelector("#hamburger");
const nav =document.querySelector ("nav"); 

hamburger.addEventListener('click', toggleMenu);

function toggleMenu () {
    nav.classList.toggle("active");
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "hidden";
        }
    }
}