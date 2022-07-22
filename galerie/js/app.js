
var all_img = document.querySelectorAll('.img-galerie img');
var full_img = document.querySelector('.full-img');


all_img.forEach(elem => {
    
    elem.addEventListener('click', function handleClick(event) {
        full_img.getElementsByTagName('img')[0].src=event.target.src;
        full_img.classList.remove('deactive');
        full_img.classList.add('active');
    });
});

var spans = document.getElementsByTagName('span');
spans[0].addEventListener("click", function() {
    full_img.classList.add("deactive");
});



// Images slider

// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;
// Set Current Slide
var currentSlide = 1;
var slideNumberElement = document.getElementById('silder-count');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');
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
// setInterval(nextSlide, 5000);

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

