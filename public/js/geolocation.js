var x = document.getElementById("demo");

getLocation();
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(updateMap, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function updateMap(position) {
    let here = {lat: position.coords.latitude, lng: position.coords.longitude};
    const maps = document.getElementsByClassName('map');

    for (let i = 0; i<maps.length; i++) {
        let map = new google.maps.Map(
            maps[i], {zoom: 20, center: here
            });
        // The marker, positioned at Uluru
        let marker = new google.maps.Marker({position: here, map: map});
    }
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}

function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
        console.log('asada')
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}