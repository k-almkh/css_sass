/* ===== Active Tabs ==== */
const nav1 = document.querySelectorAll("nav li a");
// const nav = document.querySelectorAll(".dropdown-content a");
// const dropbtn = document.querySelectorAll(".dropbtn");
// nav.forEach((style) => {
//     style.addEventListener("click", ()=>{
//         dropbtn.classList.add("active");
//     });
// });

for (var i = 0; i < nav1.length; i++) {
    nav1[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace("active", "");
    }
    this.className += " active";
    });
  }

  const nav = document.querySelectorAll(".dropdown-content a");
  const dropbtn = document.querySelectorAll(".dropbtn");
console.log(nav);
  for (var i = 0; i < nav.length; i++) {
    nav[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace("active", "");
    }
    this.className += " active";
    // dropbtn += " active";
    console.log(dropbtn);
    });
  }

  const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.add("fa-moon");
    document.body.classList.toggle("dark");

})
window.addEventListener("load", ()=>{
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})