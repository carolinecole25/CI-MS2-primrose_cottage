


function initMap() {
    const myLatLng = { lat: 50.086221, lng: -5.310867 };
    const map = new google.maps.Map(document.getElementById("map-explore"), {
        zoom: 18,
        center: myLatLng,
    });
    new google.maps.Marker({
        position: myLatLng,
        map,
    });
}