var map;
var startCenter = { lat: 43.261, lng: -79.92198 };
var patientPosition = { lat: 43.261, lng: -79.92198 };

function CenterControl(controlDiv, map) {
  // Set CSS for the control border.
  var controlUI = document.createElement("div");
  controlUI.style.backgroundColor = "#fff";
  controlUI.style.borderRadius = "6px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.textAlign = "center";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement("div");
  controlText.style.fontSize = "16px";
  controlText.style.padding = "15px";
  controlText.innerHTML = "Center Map";
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", function() {
    map.setCenter(startCenter);
  });
}

function initMap() {
  /* var startCenter = { lat: 43.261, lng: -79.92198 };
  var patientPosition = { lat: 43.261, lng: -79.92198 }; */

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
    fillOpacity: 0.2,
    editable: true,
    draggable: true
  });
  safeArea.setMap(map);

  var centerControlDiv = document.createElement("div");
  var centerControl = new CenterControl(centerControlDiv, map);

  centerControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
}
