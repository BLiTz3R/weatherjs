class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.minTemp = document.getElementById('w-min-temp');
        this.maxTemp = document.getElementById('w-max-temp');
        this.wind = document.getElementById('w-wind');
    }

    display(weather) {
        this.location.textContent = weather.name + ", " + weather.sys.country;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = Math.round(weather.main.temp) + "℃";
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.minTemp.textContent = `Min temp: ${Math.round(weather.main.temp_min)}℃`;
        this.maxTemp.textContent = `Max temp: ${Math.round(weather.main.temp_max)}℃`;

        // Transform wind degrees to direction
        let windDirection = '';
        let degrees = Math.floor((weather.wind.deg / 22.5) + 0.5);
        const directions = ["N ⬇", "N/NE ⬋", "NE ⬋", "E/NE ⬋", "E ⬅", "E/SE ⬉", "SE ⬉", "S/SE ⬉", "S ⬆", "S/SW ⬈", "SW ⬈", "W/SW ⬈", "W →", "W/NW ⬊", "NW ⬊", "N/NW ⬊"];
        windDirection = directions[(degrees % 16)];

        if (weather.wind.deg !== undefined) { 
            // Display results if defined, while transforming speed in m/s to km/h  
            this.wind.textContent = `Wind: ${windDirection} at ${(weather.wind.speed * 3.6).toFixed(2)} km/h`;
        } else {
            // hide wind directions if undefined       
            this.wind.textContent = `Wind: ${(weather.wind.speed * 3.6).toFixed(2)} km/h`; 
        }
    }
}