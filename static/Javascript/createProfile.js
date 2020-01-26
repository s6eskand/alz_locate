var map;
var startCenter = { lat: 43.261, lng: -79.92198 };
var patientPosition = { lat: 43.260063, lng: -79.920797 };

RADIUS = 200;
CENTERCIRCLE = { lat: 43.260063, lng: -79.920797 };

function CenterControl(controlDiv, map) {
  // Set CSS for the control border.
  var controlUI = document.createElement("div");
  controlUI.style.backgroundColor = "#46eb34";
  controlUI.style.borderRadius = "6px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.textAlign = "center";
  controlUI.style.opacity = "0.7";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement("div");
  controlText.style.fontSize = "16px";
  controlText.style.padding = "15px";
  controlText.innerHTML = "Register Safe Zone";
  controlUI.appendChild(controlText);

  controlUI.addEventListener("click", function() {
    //Get coords here
    RADIUS = circle.getRadius();
    CENTERCIRCLE = circle.getCenter();
    window.location.replace("/templates/track.html");
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

  // Construct the circle.
  var safeArea = new google.maps.Circle({
    center: startCenter,
    radius: 200,
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
