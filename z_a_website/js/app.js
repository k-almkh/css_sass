
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
            img_box[index].style.display = "";
         } else {
            p_box[index].style.display = "block";
            img_box[index].style.display = "none";
         }
      }

   });
}


// Images slider

// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('silder-count');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

  // Create The LI
  var paginationItem = document.createElement('li');

  // Set Custom Attribute
  paginationItem.setAttribute('data-index', i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(''));

  // Append Items to The Main Ul List
  paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {

  paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();

  }

}

// Change Images by 5 sec
setInterval(nextSlide, 9000);

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {

   if (currentSlide === slidesCount) {
      currentSlide=1;
       theChecker();
   } else {
      currentSlide++;

      theChecker();
   }
}

// Previous Slide Function
function prevSlide() {

   if (currentSlide === 1) {
      currentSlide=slidesCount;
       theChecker();
   } else {
      currentSlide--;
      theChecker();
   }
}

// Create The Checker Function
function theChecker() {

  // Set The Slide Number
  slideNumberElement.textContent =  (currentSlide) + ' / ' + (slidesCount);

  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add('active');

  // Set Active Class on Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add('active');

}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {

  // Loop Through Images
  sliderImages.forEach(function (img) {

    img.classList.remove('active');

  });

  // Loop Through Pagination Bullets
  paginationsBullets.forEach(function (bullet) {

    bullet.classList.remove('active');

  });

}