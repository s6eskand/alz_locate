var map;

function initMap() {
  var startCenter = { lat: 43.261, lng: -79.92198 };
  var patientPosition = { lat: 43.25, lng: -79.92198 };
  var userPosition = { lat: 43.261, lng: -79.92198 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: startCenter,
    zoom: 15,
    streetViewControl: false,
    disableDefaultUI: true,
    minZoom: 12,
    maxZoom: 19
  });

  var oldIcon = {
    url: "/static/images/ElderlyMan.png",
    scaledSize: new google.maps.Size(70, 70), // scaled size
    origin: new google.maps.Point(0, 0) // origin
  };

  var patientMarker = new google.maps.Marker({
    position: patientPosition,
    map: map,
    icon: oldIcon
  });
  patientMarker.setAnimation(google.maps.Animation.BOUNCE);
  //User's position
  var userMarker = new google.maps.Marker({
    position: userPosition,
    map: map
  });

  // Define the LatLng coordinates for the polygon's path.
  var safeCoords = { lat: 43.261, lng: -79.92198 };

  // Construct the polygon.
  var safeArea = new google.maps.Circle({
    //CENTER from datadase
    center: safeCoords,
    //RADIUS from database
    radius: 200,
    strokeColor: "#FF0000",
    strokeWeight: 5,
    fillColor: "#46eb34",
    fillOpacity: 0.2
  });
  safeArea.setMap(map);
}
