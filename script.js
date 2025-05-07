async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '21ee99ddf1a1d354a1a77f1997c3028e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
        document.getElementById('weatherResult').innerHTML = `
            <p><strong>City:</strong> ${data.name}</p>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>`;
            document.getElementById('weatherResult').innerHTML = `
    <p><strong>City:</strong> ${data.name}</p>
    <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>`;

    } else {
        document.getElementById('weatherResult').innerHTML = `<p>City not found. Please try again!</p>`;
    }
}
