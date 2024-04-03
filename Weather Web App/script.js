const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "4d40fd9108876e42123d577975e7471a";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }
});

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data){

    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId){

    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧";
        case (weatherId >= 600 && weatherId < 700):
            return "❄";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫";
        case (weatherId === 800):
            return "☀";
        case (weatherId >= 801 && weatherId < 810):
            return "☁";
        default:
            return "❓";
    }
}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}























// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector('.weatherForm');
//     const cityInput = document.querySelector('.cityInput');
//     const cityDisplay = document.querySelector('.cityDisplay');
//     const tempDisplay = document.querySelector('.tempDisplay');
//     const humidityDisplay = document.querySelector('.humidityDisplay');
//     const descDisplay = document.querySelector('.descDisplay');
//     const weatherEmoji = document.querySelector('.weatherEmoji');
//     const errorDisplay = document.querySelector('.errorDisplay');

//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the default form submission
        
//         const cityName = cityInput.value.trim();
//         if (cityName !== '') {
//             fetchWeather(cityName);
//         } else {
//             showError('Please enter a city name');
//         }
//     });

//     async function fetchWeather(cityName) {
//         try {
//             const apiKey = '4d40fd9108876e42123d577975e7471a'; // Replace 'YOUR_API_KEY' with your actual API key
//             const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
//             const response = await fetch(apiUrl);
//             const weatherData = await response.json();

//             if (response.ok) {
//                 updateWeather(weatherData);
//             } else {
//                 showError(weatherData.message);
//             }
//         } catch (error) {
//             console.error('Error fetching weather data:', error);
//             showError('An error occurred while fetching weather data');
//         }
//     }

//     function updateWeather(weatherData) {
//         cityDisplay.textContent = weatherData.name;
//         tempDisplay.textContent = `${weatherData.main.temp}°C`;
//         humidityDisplay.textContent = `Humidity: ${weatherData.main.humidity}%`;
//         descDisplay.textContent = weatherData.weather[0].description;
//         updateEmoji(weatherData.weather[0].description);
//         errorDisplay.textContent = '';
//     }

//     function showError(message) {
//         errorDisplay.textContent = message;
//         // Clear other weather data
//         cityDisplay.textContent = '';
//         tempDisplay.textContent = '';
//         humidityDisplay.textContent = '';
//         descDisplay.textContent = '';
//     }

//     function updateEmoji(description) {
//         // Map weather descriptions to corresponding emojis
//         const emojiMap = {
//             'clear sky': '🌞',
//             'few clouds': '⛅',
//             'scattered clouds': '☁️',
//             'broken clouds': '☁️',
//             'shower rain': '🌧️',
//             'rain': '🌧️',
//             'thunderstorm': '⛈️',
//             'snow': '❄️',
//             'mist': '🌫️',
//             'haze': '🌁',
//             'overcast clouds': '☁️'
//             // Add more mappings as needed
//         };

//         const emoji = emojiMap[description.toLowerCase()] || '❓'; // Default emoji if description not found
//         weatherEmoji.textContent = emoji;
//     }
// });
