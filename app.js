
var myAPIKey = "ebe23a3f33c441faa7078ef5c1eb0cda";

var map = new maplibregl.Map({
    container: 'map',
      style: `https://maps.geoapify.com/v1/styles/klokantech-basic/style.json?apiKey=${myAPIKey}`,
    // style: 'https://maps.geoapify.com/v1/tile/carto/{z}/{x}/{y}.png?&apiKey=ebe23a3f33c441faa7078ef5c1eb0cda',
});
map.addControl(new maplibregl.NavigationControl());



// JS Geolocation

// const successCallback = (position) => {
//     console.log(position);
//     document.getElementById('lat').textContent = 'Latitude: ' + position.coords.latitude;
//     document.getElementById('long').textContent = 'Longitude: ' + position.coords.longitude;
//     document.getElementById('acc').textContent = 'Accuracy: ' + position.coords.accuracy;

//     if (position.coords.accuracy <= 100) {
//         console.log('coordinates within 100 meters');
//     } else {
//         console.log('cant detect coordinates within 100 meters');
//     }
// };

// const errorCallback = (error) => {
//     console.log(error);
// };

// const options = {
//     enableHighAccuracy: true,
//     timeout: 10000,
// };

// navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
// // navigator.geolocation.watchPosition(successCallback, errorCallback);
