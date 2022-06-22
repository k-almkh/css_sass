let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .mynav');
let header = document.querySelector('.header');

let topBtn = document.querySelector('#myTopBtn');

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
topBtn.onclick = () =>{
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}
