'use strict';

const button = document.querySelector('button');
const spacex = document.querySelector('h1');

button.addEventListener('click', () => {
    location.reload();
})

const key = 'BSmwdny3eqvIym0Cz56IAnyE4e45vbTdmgAv0Z2q';
const weatherURL ='https://api.openweathermap.org/data/2.5/weather?q=olmito&appid=3b4a4ee478f17695c6ad24052431fd68';
let weatherParagraph = document.querySelector('p');

function fetchMarsWeather(url) {
    fetch(url)
    .then(async response => {
        const data  = await response.json();
        console.log(data);
        weatherParagraph.innerText = `Weather Launch Site: ${data.wind.deg} degrees, ${data.weather[0].main}`
    })
    .catch(err => {
        console.log(err)
    })
}

fetchMarsWeather(weatherURL)