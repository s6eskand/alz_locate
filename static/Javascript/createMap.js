var map;

function initMap() {
  var startCenter = { lat: 43.652772, lng: -79.383673 };
  var patientPosition = { lat: 43.652772, lng: -79.383673 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: startCenter,
    zoom: 15,
    streetViewControl: false,
    minZoom: 14,
    maxZoom: 19
  });

  var marker = new google.maps.Marker({
    position: patientPosition,
    map: map
    //icon:
  });
}
