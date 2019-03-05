// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.location);

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const location = document.getElementById('location').value;

   // Change location
    weather.changeLocation(location);

    // Set location in localStorage
    storage.setLocationData(location);

    // Get and display weather
    getWeather();

})

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.display(results);
        })
        .catch(error => console.log(error));
}
