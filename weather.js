class Weather {
    constructor(location) {
        this.apiKey = 'e354091af6b88af931640888203324c4';
        this.location = location;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&APPID=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(location) {
        this.location = location;
    }
}