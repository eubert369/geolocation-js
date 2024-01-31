const successCallback = (position) => {
    console.log(position);
    document.getElementById('lat').textContent = 'Latitude: ' + position.coords.latitude;
    document.getElementById('long').textContent = 'Longitude: ' + position.coords.longitude;
    document.getElementById('acc').textContent = 'Accuracy: ' + position.coords.longitude;
};

const errorCallback = (error) => {
    console.log(error);
};

const options = {
    enableHighAccuracy: true,
    timeout: 10000,
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
