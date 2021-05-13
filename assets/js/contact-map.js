
// --------------------------- Google maps 

// credit: code taken from Google API and amended to fit project.


function initMap() {
    const myLatLng = { lat: 50.086221, lng: -5.310867 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: myLatLng,
    });
    new google.maps.Marker({
        position: myLatLng,
        map,
    });
}

