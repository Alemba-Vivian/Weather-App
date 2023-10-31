import './STYLES/style.css';

// const input = document.querySelector('.myInput').value;
const input =prompt("enter location", "kenya");
const img = document.querySelector('img');
const container = document.querySelector('.container');

const text = document.querySelector('.text');
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const text3 = document.querySelector('.text3');
const text4 = document.querySelector('.text4');
const text5 = document.querySelector('.text5');
const text6 = document.querySelector('.text6');
const text7 = document.querySelector('.text7');

async function fetchWeatherAPI(){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8f4531915fce4da6a2e133242232310&q=${input},{mode:'cors'}`);
    const weatherData = await response.json();
    console.log(weatherData); 

    img.src = weatherData.current.condition.icon;
    text.textContent =weatherData.current.condition.text;

    text1.textContent =`Country: ${weatherData.location.country}`;
    text2.textContent =`Lat: ${weatherData.location.lat}`;
    text3.textContent =`Localtime: ${weatherData.location.localtime}`;
    text4.textContent =`Lon: ${weatherData.location.lon}`;
    text5.textContent =`Name: ${weatherData.location.name}`;
    text6.textContent =`Region: ${weatherData.location.region}`;
    text7.textContent =`Id: ${weatherData.location.tz_id}`;
    


    // if(weatherData.current.condition.text==='Sunny'){
    //     container.style.backgroundColor ='red';
    // }else if(weatherData.current.condition.text==='Cloudy'){
    //     container.style.backgroundColor ='green';
    // }else if(weatherData.current.condition.text==='Moderate rain'){
    //     container.style.backgroundColor ='yellow';
    // }

}
fetchWeatherAPI();



// fetch(`http://api.weatherapi.com/v1/current.json?key=8f4531915fce4da6a2e133242232310&q=${input},{mode:'cors'}`)
// .then(response=>{
//     return response.json();
// })
// .then(data=>{
//     console.log(data);
// })
// .catch(error=>{
//     console.log(error);
// })









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




