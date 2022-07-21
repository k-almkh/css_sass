
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
