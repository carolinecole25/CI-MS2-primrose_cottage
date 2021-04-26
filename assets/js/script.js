
// ----------------------------Scrolling Nav Bar 

type="text/javascript">
        window.addEventListener("scroll", function(){
            var header = document.querySelector("header");
            header.classList.toggle("scroll", window.scrollY > 0);
        })

// --------------------------- Google maps 

function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 18,
                center: { lat: 50.086221, lng: -5.310867 }
            })
        }


// -------------------------- Buttons 

function turnWhite() {
    let button = document.getElementById("button")
    button.style.backgroundColor = "white"
} 

//--------------------------- Gallery slideshow

const track = document.querySelector('slideshow-track');

