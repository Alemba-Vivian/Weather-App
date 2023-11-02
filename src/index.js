import './STYLES/style.css';

// const input = document.querySelector('.myInput');
const input = prompt("Enter the name of the location", "Kenya");
const img = document.querySelector('img');
const container = document.querySelector('.container');

const country = document.querySelector('.location-country');
const localTime = document.querySelector('.localtime');
const localtimeEpoch = document.querySelector('.localtime_epoch');
const weather_text = document.querySelector('.text');
const name = document.querySelector('.name');
const region = document.querySelector('.region');
const tzID = document.querySelector('.tz_id');
const lat = document.querySelector('.lat');
const lon = document.querySelector('.lon');

// name.textContent ="";
// region.textContent ="";
// tzID.textContent ="";


async function fetchWeatherAPI(){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8f4531915fce4da6a2e133242232310&q=${input}`);
    const weatherData = await response.json();
    console.log(weatherData); 

    img.src = weatherData.current.condition.icon;
    weather_text.textContent =weatherData.current.condition.text;

    country.textContent =`${weatherData.location.country}`;
    localTime.textContent =`${weatherData.location.localtime}`;
    localtimeEpoch.textContent =`${weatherData.location.localtime_epoch}`;
    lat.textContent =`${weatherData.location.lat}`;
    lon.textContent =`${weatherData.location.lon}`;
    name.textContent =`${weatherData.location.name}`;
    region.textContent =`${weatherData.location.region}`;
    tzID.textContent =`${weatherData.location.tz_id}`;
    
    // if(weatherData.current.condition.text==='Sunny'){
    //     container.style.backgroundColor ='red';
    // }else if(weatherData.current.condition.text==='Cloudy'){
    //     container.style.backgroundColor ='green';
    // }else if(weatherData.current.condition.text==='Moderate rain'){
    //     container.style.backgroundColor ='yellow';
    // }

}
fetchWeatherAPI();


// function fetchWeatherData(data){
//     console.log(data);
//     img.src = data.current.condition.icon;
//     text.textContent =data.current.condition.text;
//     if(data.current.condition.text==='Sunny'){
//         container.style.backgroundColor ='red';
//     }else if(data.current.condition.text==='Cloudy'){
//         container.style.backgroundColor ='green';
//     }else if(data.current.condition.text==='Moderate rain'){
//         container.style.backgroundColor ='yellow';
//     }
// }   







