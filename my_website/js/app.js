const menu= document.getElementById('menu');
const ul_nav= document.getElementById('actions');

menu.addEventListener('click',()=>{
    handelMenu();
});

function handelMenu() {
    menu.classList.toggle('is_active');
    ul_nav.classList.toggle('is_active');
}
