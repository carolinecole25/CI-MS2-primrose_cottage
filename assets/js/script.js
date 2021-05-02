
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

//--------Forms.js 

function validation(){
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById(".error_message");
    var text;

    //error_message.style.padding = "10px";

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
