var map;

function initMap() {
  var startCenter = { lat: 43.261, lng: -79.92198 };
  var patientPosition = { lat: 43.260063, lng: -79.920797 };
  var userPosition = { lat: 43.261, lng: -79.92198 };
  var onTheRun = patientPosition;
  // Define the LatLng coordinates for the polygon's path.
  var safeCoords = { lat: 43.261, lng: -79.92198 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: startCenter,
    zoom: 17,
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

  //User's position
  var userMarker = new google.maps.Marker({
    position: userPosition,
    map: map
  });

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

  safeArea.addListener("click", moveDad);

  function moveDad() {
    var i = 0;
    patientMarker.setAnimation(google.maps.Animation.BOUNCE);
    function myLoop() {
      setTimeout(function() {
        onTheRun.lng += 0.0000011;
        patientMarker.setPosition(onTheRun);
        i++;
        if (i < 990) {
          myLoop();
        } else {
          patientMarker.setAnimation(null);
          var toPersonLine = new google.maps.Polyline({
            path: [userPosition, onTheRun],
            strokeColor: "#FF0000",
            strokeWeight: 6,
            map: map
          });
          setTimeout(alert("Alfred is outside of the safe zone!"), 1000);
        }
      }, 10);
    }
    myLoop();
  }
}

function measure(lat1, lon1, lat2, lon2) {
  // generally used geo measurement function
  var R = 6378.137; // Radius of earth in KM
  var dLat = (lat2 * Math.PI) / 180 - (lat1 * Math.PI) / 180;
  var dLon = (lon2 * Math.PI) / 180 - (lon1 * Math.PI) / 180;
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d * 1000; // meters
}
