// ----------------------------Scrolling Nav Bar 
// Credit, linked in README.md file 

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("scroll", window.scrollY > 0);
});