

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



