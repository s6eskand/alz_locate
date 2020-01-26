var map;

function initMap() {
  var startCenter = { lat: 43.261, lng: -79.92198 };
  var patientPosition = { lat: 43.261, lng: -79.92198 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: startCenter,
    zoom: 15,
    streetViewControl: false,
    disableDefaultUI: true,
    minZoom: 14,
    maxZoom: 19
  });

  var marker = new google.maps.Marker({
    position: patientPosition,
    map: map
    //icon:
  });

  // Define the LatLng coordinates for the polygon's path.
  var safeCoords = [
    { lat: 43.25, lng: -79.92198 },
    { lat: 43.25, lng: -79.94 },
    { lat: 43.27, lng: -79.92198 },
    { lat: 43.27, lng: -79.9 }
  ];

  // Construct the polygon.
  var safeArea = new google.maps.Polygon({
    paths: safeCoords,
    strokeColor: "#FF0000",
    strokeWeight: 5,
    fillColor: "#46eb34",
    fillOpacity: 0.2
  });
  safeArea.setMap(map);
}
