let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .mynav');
let header = document.querySelector('.header');

let topBtn = document.querySelector('#myTopBtn');

let accordionBtn = document.querySelectorAll('.accordion_header');



menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

  if(window.scrollY > 0){
     header.classList.add('active');
  }else{
     header.classList.remove('active');
  }

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
      accordionBtn.forEach(elem => {
          elem.classList.remove('accordion_active');
       });
      event.target.classList.add("accordion_active");
    });
});
