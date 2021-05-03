
// ----------------------------Scrolling Nav Bar 

type="text/javascript">
        window.addEventListener("scroll", function(){
            var header = document.querySelector("header");
            header.classList.toggle("scroll", window.scrollY > 0);
        })

// --------------------------- Google maps 
// credit: code taken from Code Institue lesson, linked in README.md 
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


//--------Forms.js 

function validation(){
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById(".error_message");
    var text;

    error_message.style.padding = "10px";

    if(name.length <4){
        text = "Please enter valid name";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length <10){
        text = "Please enter valid name";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1){
        text = "Please enter a valid email address";
        error_message.innerHTML = text;
        return false;
    }

    alert("Thank you for getting in touch!");
    return true;
}


//-------Slideshow
// credit, code taken from Youtube tutorial and amended to fit my project.

const track = document.querySelector('.slideshow-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.slideshow-button--right');
const prevButton = document.querySelector('.slideshow_button--left');
const dotsNav = document.querySelector('.slideshow-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to each other 

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

// when cliked right, move slides to the right 
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    //move to the next slide
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide')
});s

