
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
      var p_box = this.getElementsByTagName('p');
      var img_box = this.getElementsByTagName('img');
      for (let index = 0; index<p_box.length; index++) {
         if (p_box[index].style.display === "block") {
            p_box[index].style.display = "none";
            img_box[0].style.display = "";
         } else {
            p_box[index].style.display = "block";
            img_box[0].style.display = "none";
         }
      }

   });
}


// Images Galerie
var all_img = document.querySelectorAll('.img-galerie img');
var full_img = document.querySelector('.full-img');

all_img.forEach(elem => {
    elem.addEventListener('click', function handleClick(event) {
        full_img.getElementsByTagName('img')[0].src=event.target.src;
        full_img.classList.remove('deactive');
        full_img.classList.add('active');
    });
});

var spans = full_img.getElementsByTagName('span');
spans[0].addEventListener("click", function() {
    full_img.classList.add("deactive");
});
