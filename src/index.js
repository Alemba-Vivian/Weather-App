import './STYLES/style.css';

//DOM MANIPULATION--REFERENCES
const form = document.querySelector('form');
const inputValueFromHTML = document.querySelector('.myInput').value;

const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');

const container = document.querySelector('.container');

//LOCATION
const country = document.querySelector('.location-country');
const country2 = document.querySelector('.location-country2');
const country3 = document.querySelector('.location-country3');

const localTime = document.querySelector('.localtime');
const localTime2 = document.querySelector('.localtime2');

const localtimeEpoch = document.querySelector('.localtime_epoch');
const weather_text = document.querySelector('.text');

const name = document.querySelector('.name');
const name2 = document.querySelector('.name2');

const region = document.querySelector('.region');
const tzID = document.querySelector('.tz_id');
const lat = document.querySelector('.lat');
const lon = document.querySelector('.lon');

//CURRENT
const pressure_in = document.querySelector('.pressure_in');
const pressure_mb = document.querySelector('.pressure_mb');

const pressure_in2 = document.querySelector('.pressure_in2');
const pressure_mb2 = document.querySelector('.pressure_mb2');

const pressure_in3 = document.querySelector('.pressure_in3');

const uv = document.querySelector('.uv');
const precip_in = document.querySelector('.precip_in');
const precip_mm = document.querySelector('.precip_mm');
const temp_c = document.querySelector('.temp_c');
const temp_f = document.querySelector('.temp_f');

const wind_degree = document.querySelector('.wind_degree');
const wind_kph = document.querySelector('.wind_kph');
const wind_mph = document.querySelector('.wind_mph');

const humidity = document.querySelector('.humidity');

const feelslike_c = document.querySelector('.feelslike_c');
const feelslike_f = document.querySelector('.feelslike_f');

const gust_kph= document.querySelector('.gust_kph');
const gust_mph= document.querySelector('.gust_mph');





form.addEventListener('submit', (e)=>{
    e.preventDefault(e);
     
    let input = document.querySelector('.myInput').value;
    const url =`http://api.weatherapi.com/v1/current.json?key=8f4531915fce4da6a2e133242232310&q=${input}`;

    if(input === ""){
        alert("Enter a location name");
    }else{
    fetch(url).then(function(response){
        if(response.ok){
            return response.json();
        }else{
            throw new Error(Error);
        }
    })
    .then(function(weatherData){
        img1.src = weatherData.current.condition.icon;
        img2.src = weatherData.current.condition.icon;
  
    //location
    country.textContent =`${weatherData.location.country}`;
    country2.textContent =`${weatherData.location.country}`;
    country3.textContent =`${weatherData.location.country}`;

    localTime.textContent =`${weatherData.location.localtime}`;
    localTime2.textContent =`${weatherData.location.localtime}`;

    localtimeEpoch.textContent =`${weatherData.location.localtime_epoch}`;
    lat.textContent =`${weatherData.location.lat}`;
    lon.textContent =`${weatherData.location.lon}`;

    name.textContent =`${weatherData.location.name}`;
    name2.textContent =`${weatherData.location.name}`;

    region.textContent =`${weatherData.location.region}`;
    tzID.textContent =`${weatherData.location.tz_id}`;

    //current
    weather_text.textContent =weatherData.current.condition.text;
    pressure_in.textContent =`${weatherData.current.pressure_in}`;
    pressure_mb.textContent =`${weatherData.current.pressure_mb}`;

    pressure_in2.textContent =`${weatherData.current.pressure_in}`;
    pressure_in3.textContent =`${weatherData.current.pressure_in}`;
    pressure_mb2.textContent =`${weatherData.current.pressure_mb}`;
    


    uv.textContent =`${weatherData.current.uv}`;
    precip_in.textContent =`${weatherData.current.precip_in}`;
    precip_mm.textContent =`${weatherData.current.precip_mm}`;
    temp_c.textContent =`${weatherData.current.temp_c}`;
    temp_f.textContent =`${weatherData.current.temp_f}`;

    wind_degree.textContent =`${weatherData.current.wind_degree}`;
    wind_kph.textContent =`${weatherData.current.wind_kph}`;
    wind_mph.textContent =`${weatherData.current.wind_mph}`;

    humidity.textContent =`${weatherData.current.humidity}`;

    feelslike_c.textContent =`${weatherData.current.feelslike_c}`;
    feelslike_f.textContent =`${weatherData.current.feelslike_f}`;

    gust_kph.textContent =`${weatherData.current.gust_kph}`;
    gust_mph.textContent =`${weatherData.current.gust_mph}`;    

   
    })
    
    .catch(function(error){
        console.log(error);
    });    
}


});


async function fetchWeatherAPI(){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8f4531915fce4da6a2e133242232310&q=${inputValueFromHTML}`);
    const weatherData = await response.json();
    console.log(weatherData); 

    img1.src = weatherData.current.condition.icon;
    img2.src = weatherData.current.condition.icon;
  
    //location
    country.textContent =`${weatherData.location.country}`;
    country2.textContent =`${weatherData.location.country}`;
    country3.textContent =`${weatherData.location.country}`;

    localTime.textContent =`${weatherData.location.localtime}`;
    localTime2.textContent =`${weatherData.location.localtime}`;

    localtimeEpoch.textContent =`${weatherData.location.localtime_epoch}`;
    lat.textContent =`${weatherData.location.lat}`;
    lon.textContent =`${weatherData.location.lon}`;

    name.textContent =`${weatherData.location.name}`;
    name2.textContent =`${weatherData.location.name}`;

    region.textContent =`${weatherData.location.region}`;
    tzID.textContent =`${weatherData.location.tz_id}`;

    //current
    weather_text.textContent =weatherData.current.condition.text;
    pressure_in.textContent =`${weatherData.current.pressure_in}`;
    pressure_mb.textContent =`${weatherData.current.pressure_mb}`;

    pressure_in2.textContent =`${weatherData.current.pressure_in}`;
    pressure_in3.textContent =`${weatherData.current.pressure_in}`;

    pressure_mb2.textContent =`${weatherData.current.pressure_mb}`;
   


    uv.textContent =`${weatherData.current.uv}`;
    precip_in.textContent =`${weatherData.current.precip_in}`;
    precip_mm.textContent =`${weatherData.current.precip_mm}`;
    temp_c.textContent =`${weatherData.current.temp_c}`;
    temp_f.textContent =`${weatherData.current.temp_f}`;

    wind_degree.textContent =`${weatherData.current.wind_degree}`;
    wind_kph.textContent =`${weatherData.current.wind_kph}`;
    wind_mph.textContent =`${weatherData.current.wind_mph}`;

    humidity.textContent =`${weatherData.current.humidity}`;

    feelslike_c.textContent =`${weatherData.current.feelslike_c}`;
    feelslike_f.textContent =`${weatherData.current.feelslike_f}`;

    gust_kph.textContent =`${weatherData.current.gust_kph}`;
    gust_mph.textContent =`${weatherData.current.gust_mph}`;

}
fetchWeatherAPI();

  







