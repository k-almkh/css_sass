// typing anmation
var typed= new Typed(".typing",{
    strings:["","Web Designer", "Web Developer", "Graphic Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});

// const menu = document.querySelector(".nav-toggler");
// const nav = document.querySelector(".nav");
// console.log(nav);
// menu.addEventListener('click',()=>{
//     handelMenu();
// });

// function handelMenu() {
//     menu.classList.toggle('active');
//     nav.classList.toggle('active');
// }


/* ===== Active Tabs ==== */
const nav1 = document.querySelectorAll(".nav li a");
for (var i = 0; i < nav1.length; i++) {
    nav1[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace("active", "");
    }
    this.className += " active";
    });
  }
