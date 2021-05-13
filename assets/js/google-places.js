


function initMap() {
    const myLatLng = { lat: 50.08533653517827, lng: -5.316203635722799 };
    const map = new google.maps.Map(document.getElementById("map-explore"), {
        zoom: 16,
        center: myLatLng,
    });
    new google.maps.Marker({
        position: myLatLng,
        map,
    });
}
