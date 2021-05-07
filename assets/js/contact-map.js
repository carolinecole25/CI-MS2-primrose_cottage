
// --------------------------- Google maps 

// credit: code taken from Code Institue lesson and edited to suit project, linked in README.md 

 // function initMap() {
    //         var map = new google.maps.Map(document.getElementById("map"), {
      //           zoom: 18,
       //          center: { lat: 50.086221, lng: -5.310867 }
         //    });
           //  const marker = new google.maps.Marker({
             //   position: { lat: 50.086221, lng: -5.310867 }
              //  map: map,
               // });
      //  }

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