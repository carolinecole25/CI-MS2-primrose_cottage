
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

//--------------------------- Gallery slideshow

const track = document.querySelector('slideshow-track');

//--------------------------- contact Form 

let contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    let userName = contactForm.elements['fullname'].value;
    let email = contactForm.elements['email'].value;
    let message = contactForm.elements['message'].value;

    let html = `
    <p>Hello ${userName}! Thanks for sending us a message! We will responde to ${email} as soon as possible. </p>
`;
}