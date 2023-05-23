'use strict';

const button = document.querySelector('button');
const spacex = document.querySelector('h1');

button.addEventListener('click', () => {
    location.reload();
})

spacex.addEventListener('mouseover', (event) => {
    console.log('Hoverttt', event)
})