// Denna fil skall innehålla JavaScript (JS)


const hamburger = document.querySelector("#hamburger");
const nav =document.querySelector ("nav"); 

hamburger.addEventListener('click', toggleMenu);

function toggleMenu () {
    nav.classList.toggle("active");
}


var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

