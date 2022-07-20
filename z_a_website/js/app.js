
let navbar = document.querySelector('.header .main-nav');
let header = document.querySelector('.header');

let topBtn = document.querySelector('#myTopBtn');

let accordionBtn = document.querySelectorAll('.accordion_header');

// menu.onclick = () =>{
//    menu.classList.toggle('fa-times');
//    navbar.classList.toggle('active');
// }

window.onscroll = () =>{
   
    if(window.scrollY > 20){
       topBtn.style.display = "block";
    }else{
       topBtn.style.display = "none";
    }
 
 }
 
 // To Top
 topBtn.onclick = () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
 }

 //  Animated Accordion 
accordionBtn.forEach(function (elem) {
   elem.addEventListener('click', function handleClick(event) {
     // ✅ Remove class from each element
     if (event.target.classList.contains("accordion_active")) {
         accordionBtn.forEach(elem => {
            elem.classList.remove('accordion_active');
         });
     } else {
         accordionBtn.forEach(elem => {
            elem.classList.remove('accordion_active');
         });
         event.target.classList.add("accordion_active");
     }
    });
});

 //  Services box Animated Accordion 
let services_box = document.querySelectorAll('.services .box');
var i;

for (i = 0; i < services_box.length; i++) {
   services_box[i].addEventListener("click", function() {
   this.classList.toggle("content");
      var panel = this.getElementsByTagName('p');
      for (let index = 0; index<panel.length; index++) {
         if (panel[index].style.display === "block") {
            panel[index].style.display = "none";
         } else {
            panel[index].style.display = "block";
         }
      }

   });
}