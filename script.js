{newLocation.innerHTML = 'Location ' + verb + ': ' + location.coords.latitude + ', ' + location.coords.longitude + '';
target.appendChild(newLocation);
}

if ('geolocation' in navigator) {
document.getElementById('askButton').addEventListener('click', function () {
  navigator.geolocation.getCurrentPosition(function (location) {
    appendLocation(location, 'fetched');
  });
  watchId = navigator.geolocation.watchPosition(appendLocation);
});
} else {
target.innerText = 'Geolocation API not supported.';}