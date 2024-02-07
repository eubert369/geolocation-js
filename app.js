
// var myAPIKey = "ebe23a3f33c441faa7078ef5c1eb0cda";

// var map = new maplibregl.Map({
//     container: 'map',
//       style: `https://maps.geoapify.com/v1/styles/klokantech-basic/style.json?apiKey=${myAPIKey}`,
//     // style: 'https://maps.geoapify.com/v1/tile/carto/{z}/{x}/{y}.png?&apiKey=ebe23a3f33c441faa7078ef5c1eb0cda',
// });
// map.addControl(new maplibregl.NavigationControl());



// google map API
// function initMap() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8
//     });

//     // Create a Geolocation object
//     var geolocation = new google.maps.Geolocation();

//     // Get the user's current location
//     geolocation.getCurrentPosition(function(position) {
//         var userLocation = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//         };

//         // Place a marker at the user's current location
//         var marker = new google.maps.Marker({
//             position: userLocation,
//             map: map,
//             title: 'Your Location'
//         });

//         // Center the map on the user's location
//         map.setCenter(userLocation);
//     }, function() {
//         alert('Error: The Geolocation service failed.');
//     });
// }







// JS Geolocation

var gmpMap = document.querySelector('gmp-map');
var gmpMarker = document.querySelector('gmp-advanced-marker');

// var gmpCenterAttribute = gmpMap.getAttribute('center');
// var gmpMarkerPositionAttribute = gmpMarker.getAttribute('position');

var coordinates = '';
var distance;

const successCallback = (position) => {
    console.log(position);
    coordinates = position.coords.latitude + ', ' + position.coords.longitude;
    // gmpMap.setAttribute('center', coordinates);
    // gmpMarker.setAttribute('position', coordinates);

    // document.getElementById('lat').textContent = 'Latitude: ' + position.coords.latitude;
    // document.getElementById('long').textContent = 'Longitude: ' + position.coords.longitude;
    // document.getElementById('acc').textContent = 'Accuracy: ' + position.coords.accuracy;
    // Current location coordinates
    // 11.240029883135003, 125.00268827609003
    // 11.238277945581412, 125.00150250628963
    const currentLat = 11.240029883135003;
    const currentLon = 125.00268827609003;

    // Provided coordinates
    const providedLat = 11.238277945581412;
    const providedLon = 125.00150250628963;

    // Specified proximity in kilometers
    const proximity = 5; // 10 kilometers

    // Calculate the distance between the current location and the provided coordinates
    distance = calculateDistance(currentLat, currentLon, providedLat, providedLon);

    // Check if the distance is within the specified proximity
    if (distance <= proximity) {
        console.log('The provided coordinates are within the specified proximity of the current location.');
    } else {
        console.log('The provided coordinates are not within the specified proximity of the current location.');
    }
};

const errorCallback = (error) => {
    console.log(error);
};

const options = {
    enableHighAccuracy: true,
    timeout: 10000,
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
// navigator.geolocation.watchPosition(successCallback, errorCallback);

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
}

