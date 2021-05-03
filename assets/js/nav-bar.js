// ----------------------------Scrolling Nav Bar 
// Credit, linked in README.md file 

type="text/javascript">
        window.addEventListener("scroll", function(){
            var header = document.querySelector("header");
            header.classList.toggle("scroll", window.scrollY > 0);
        })